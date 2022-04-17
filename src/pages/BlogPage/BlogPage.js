import React, { useEffect, useState } from 'react';
import './BlogPage.css';
import { Post } from './Post/Post';
import { PostsHeader } from './PostsHeader/PostsHeader';
import {
  deletePost,
  editPost,
  fetchPosts,
  selectPostsData,
} from '../../store/slices/posts';
import { useDispatch, useSelector } from 'react-redux';
import { EditForm } from '../../components/EditForm/EditForm';

export const BlogPage = () => {
  // const likedPosts = blogPosts.filter((post) => post.liked);

  const { list: posts, isLoading, error } = useSelector(selectPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = {
      ...updatedPosts[index],
      liked: !updatedPosts[index].liked,
    };

    dispatch(editPost(updatedPosts[index]));
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
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
        title={'Posts'}
        isLikedPosts={false}
        blogPosts={posts}
      />

      <section className='posts'>
        {posts.map((post, pos) => {
          return (
            <Post
              {...post}
              likePost={() => handleLikePost(pos)}
              deletePost={() => handleDeletePost(post.id)}
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
        />
      )}
    </div>
  );
};
