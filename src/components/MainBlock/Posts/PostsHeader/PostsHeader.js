import React from 'react'
import { SearchForm } from './SearchForm/SearchForm';
import './PostHeader.css'

export const PostsHeader = () => {
  return (
    <section className="postsHeader">
      <h1>Posts</h1>
      <SearchForm />
    </section>  
  )
}
