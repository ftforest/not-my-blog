import React from 'react';
import { PostsHeader } from './PostsHeader/PostsHeader';
import postImage from '../../../assets/images/postImage.jpg';
import './Posts.css';
import { Post } from './Post/Post';

export const Posts = () => {

  return (
    <div className='postsWrapper'>
      <PostsHeader />

      <section className='posts'>
        <Post
          title='Post 1'
          description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis beatae temporibus ad omnis? Quod delen
          '
          liked
        />
        <Post
          title='Post 2'
          description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis beatae temporibus ad omnis? Quod deleniti nostrum aut enim provident 
            officiis consequatur quos non facilis eum? Similique porro aut rerum architecto!
          '
          image={postImage}
        />
        <Post
          title='Post 3'
          description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis beatae temporibus ad omnis? 
          '
          liked
          image={postImage}
        />
        <Post
          title='Post 4'
          description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis beatae temporibus ad omnis? Quod deleniti nostrum aut enim provident 
            officiis consequatur quos non facilis eum? Similique porro aut rerum architecto!
          '
          liked
        />
        <Post
          title='Post 5'
          description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis beatae temporibus ad omnis? Qu
          '
          liked
          image={postImage}
        />
        <Post
          title='Post 6'
          description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis beatae temporibus ad omnis? Quod deleniti nostrum aut enim provident 
            officiis consequatur quos non facilis eum? Similique porro aut rerum architecto!
          '
          image={postImage}
        />
      </section>
    </div>
  );
};
