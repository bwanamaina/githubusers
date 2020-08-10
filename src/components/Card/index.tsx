import React from 'react';

import './style.css';

interface ICard {
  user: User;
  isLoading: boolean;
}

const Card: React.FC<ICard> = ({ user, isLoading }) => {
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className='cards'>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={user.avatar_url} alt={user.name} />
            <span>
              <strong>Name:</strong> {user.name}
            </span>
          </div>
          <div className='card-back'>
            <h1>{user.name}</h1>
            <ul>
              <li>
                <strong>Bio:</strong> {user.bio}
              </li>
              <li>
                <strong>Followers:</strong> {user.followers}
              </li>
              <li>
                <strong>Following:</strong> {user.following}
              </li>
              <li>
                <strong>Public Repos:</strong> {user.public_repos}
              </li>
              {user.blog && (
                <li>
                  <strong>Blog:</strong>
                  <a href={user.blog}>{user.blog}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
