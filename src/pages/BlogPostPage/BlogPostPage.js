import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { POSTS_URL } from '../../utils/constants';
import { useGetSinglePost } from '../../utils/hooks';

import { ReactComponent as HeartIcon } from '../../assets/images/heart.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/trash.svg';
import { ReactComponent as PenIcon } from '../../assets/images/pen.svg';
import { useHistory } from 'react-router-dom';
import { EditForm } from './EditForm/EditForm';

export const BlogPostPage = ({ setBlogPosts }) => {

  const { postId } = useParams();

  const history = useHistory();

  const { blogPost, setBlogPost, isLoading, error } = useGetSinglePost(POSTS_URL, postId);

  const [showEditForm, setShowEditForm] = useState(false);

  const { title, description, thumbnail, liked } = blogPost;

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  const likePost = () => {
    const updatedPost = {...blogPost, liked: !blogPost.liked};

    fetch(POSTS_URL + postId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((updatedPostFromServer) => {
        setBlogPost(updatedPostFromServer);
        setBlogPosts((blogPosts) => {
          return blogPosts.map(post => {
            if (post.id === updatedPostFromServer.id) {
              return updatedPostFromServer
            }

            return post
          })
        })
      })
      .catch((error) => console.log(error));
  };

  const deletePost = () => {
    const isDelete = window.confirm('Удалить пост?');

    if (isDelete) {
      fetch(POSTS_URL + postId, { method: 'DELETE' })
        .then(() => {
          setBlogPosts((blogPosts) => blogPosts.filter((post) => post.id !== postId))
          history.goBack();
        })
        .catch((error) => console.log(error));
    }
  };

  const handleEditFormShow = () => setShowEditForm(true);

  const customFilling = liked ? 'crimson' : 'black';

  return (
    <div className='post'>
      <img src={thumbnail} alt='post' />
      <h2>{title}</h2>
      {description}
      <div className='actions'>
        <button onClick={likePost} className='likeBtn'>
          <HeartIcon fill={customFilling} />
        </button>
        <button onClick={deletePost} className='deleteBtn'>
          <TrashIcon />
        </button>
        <button onClick={handleEditFormShow} className='selectBtn'>
          <PenIcon />
        </button>
      </div>

      {showEditForm && (
        <EditForm
          setShowEditForm={setShowEditForm}
          setBlogPost={setBlogPost}
          blogPost={blogPost}
          setBlogPosts={setBlogPosts}
        />
      )}
    </div>
  );
};
