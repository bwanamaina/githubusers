import React from 'react';

const Card = (user) => {
  console.log(user);
  return (
    <div>
      <img src={user.avatar_url} alt='avatar' />
    </div>
  );
};

export default Card;
