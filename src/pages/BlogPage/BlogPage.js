import React, { useState } from 'react';
import './BlogPage.css';
import { Post } from './Post/Post';
import { EditForm } from './EditForm/EditForm';
import { POSTS_URL } from '../../utils/constants';
import { PostsHeader } from './PostsHeader/PostsHeader';

export const BlogPage = ({
  title,
  blogPosts,
  isLoading,
  setBlogPosts,
  error,
  isLikedPosts = false,
}) => {
  const likedPosts = blogPosts.filter((post) => post.liked);

  const likePost = (pos) => {
    const updatedPosts = [...blogPosts];

    updatedPosts[pos].liked = !updatedPosts[pos].liked;

    fetch(POSTS_URL + updatedPosts[pos].id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPosts[pos]),
    })
      .then((res) => res.json())
      .then((updatedPostFromServer) => {
        updatedPosts[pos] = updatedPostFromServer;
        setBlogPosts(updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  const deletePost = (postId) => {
    const isDelete = window.confirm('Удалить пост?');

    if (isDelete) {
      fetch(POSTS_URL + postId, { method: 'DELETE' })
        .then(() =>
          setBlogPosts(blogPosts.filter((post) => post.id !== postId))
        )
        .catch((error) => console.log(error));
    }
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (post) => {
    setSelectedPost(post);
    setShowEditForm(true);
  };

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className='postsWrapper'>
      <PostsHeader
        title={title}
        isLikedPosts={isLikedPosts}
        setBlogPosts={setBlogPosts}
        blogPosts={blogPosts}
      />

      <section className='posts'>
        {(isLikedPosts ? likedPosts : blogPosts).map((post, pos) => {
          return (
            <Post
              {...post}
              likePost={() => likePost(pos)}
              deletePost={() => deletePost(post.id)}
              selectPost={() => selectPost(post)}
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
