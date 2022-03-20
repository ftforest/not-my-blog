import React, { useState } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import './PostHeader.css';
import { AddForm } from './AddForm/AddForm';

export const PostsHeader = ({ blogPosts, setBlogPosts }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section className='postsHeader'>
      <h1>Posts</h1>
      <button onClick={() => setShowAddForm(true)} className='showAddFormBtn'>
        Создать пост
      </button>
      <SearchForm />

      {showAddForm && (
        <AddForm
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
          setShowAddForm={setShowAddForm}
        />
      )}
    </section>
  );
};
