import React, { useState } from 'react';

import imagePlaceholder from '../../../../assets/images/placeholder.png';
import { ReactComponent as HeartIcon } from '../../../../assets/images/heart.svg';

import './Post.css';

export const Post = ({
  title,
  description,
  liked = false,
  image = imagePlaceholder,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  const customFilling = isLiked ? 'crimson' : 'black';

  const like = () => setIsLiked(!isLiked);

  const finalDescription = (
    <p>
      {description.length > 100 ? (
        <>
          {description.slice(0, 101)}...
          <a href='/'>Подробнее</a>
        </>
      ) : (
        description
      )}
    </p>
  );

  return (
    <div className='post'>
      <img src={image} alt='post' />
      <h2>{title}</h2>
      {finalDescription}
      <button onClick={like} className='likeBtn'>
        <HeartIcon fill={customFilling} />
      </button>
    </div>
  );
};
