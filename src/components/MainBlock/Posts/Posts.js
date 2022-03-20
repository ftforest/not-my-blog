import React, { useState } from 'react';
import { PostsHeader } from './PostsHeader/PostsHeader';
import './Posts.css';
import { Post } from './Post/Post';
import { POSTS } from '../../../utils/constants';
import { setPostsToLocalStorage } from '../../../utils/helpers';
import { EditForm } from './EditForm/EditForm';

export const Posts = () => {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem('blogPosts')) || POSTS
  );

  const likePost = (pos) => {
    const updatedPosts = [...blogPosts];

    updatedPosts[pos].liked = !updatedPosts[pos].liked;

    setPostsToLocalStorage(updatedPosts);
    setBlogPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const isDelete = window.confirm('Удалить пост?');

    if (isDelete) {
      const updatedPosts = blogPosts.filter((post) => {
        return post.id !== postId;
      });

      setPostsToLocalStorage(updatedPosts);
      setBlogPosts(updatedPosts);
    }
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (pos) => {
    setSelectedPost(blogPosts[pos]);
    setShowEditForm(true);
  };

  return (
    <div className='postsWrapper'>
      <PostsHeader setBlogPosts={setBlogPosts} blogPosts={blogPosts} />

      <section className='posts'>
        {blogPosts.map((post, pos) => {
          return (
            <Post
              title={post.title}
              description={post.description}
              liked={post.liked}
              image={post.image}
              likePost={() => likePost(pos)}
              deletePost={() => deletePost(post.id)}
              selectPost={() => selectPost(pos)}
              key={post.id}
            />
          );
        })}
      </section>

      {showEditForm && (
        <EditForm
          selectedPost={selectedPost}
          setShowEditForm={setShowEditForm}
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
        />
      )}
    </div>
  );
};
