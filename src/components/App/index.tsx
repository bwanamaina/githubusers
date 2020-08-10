import React from 'react';

import './style.css';

import Search from '../Search';
import Card from '../Card';

const App = () => {
  const [user, setUser] = React.useState<User>(null);
  const [haError, setHasError] = React.useState(false);
  const [searchedUser, setSearchedUser] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState(
    'Search github user by username'
  );

  React.useEffect(() => {
    function apiCall() {
      setIsLoading(true);
      const url = `https://api.github.com/users/${searchedUser}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setUser(result);
          setIsLoading(false);
          // check if it returned error object or user object
          if (Object.prototype.hasOwnProperty.call(result, 'message')) {
            setUser(null);
            const { message } = result;
            setMessage(message);
          }
        })
        .catch((err) => {
          setHasError(true);
          setIsLoading(false);
          console.log(err);
        });
    }
    if (searchedUser) {
      apiCall();
    } else {
      setUser(null);
    }
  }, [searchedUser]);

  const onSearchChange = (searchValue: string) => {
    setSearchedUser(searchValue);
  };

  return (
    <div className='wrapper'>
      <Search searchQuery={onSearchChange} />
      {user ? (
        <Card isLoading={isLoading} user={user} />
      ) : (
        <div className='wrapper-body-text'>{message}</div>
      )}
    </div>
  );
};

export default App;
