import avatar from '../../../../assets/images/avatar.jpg';

import React from 'react';
import './User.css';

export const User = () => {
  return (
    <div className='user'>
      <div className='avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <h3>James</h3>
    </div>
  );
};
