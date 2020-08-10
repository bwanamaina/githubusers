import React, { useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Cards';

function App() {
  const [user, setUser] = React.useState({});
  const [haError, setHasError] = React.useState(false);
  const [searchedUser, setSearchedUser] = React.useState('');

  useEffect(() => {
    function apiCall() {
      const url = `https://api.github.com/users/${searchedUser}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setUser(result);
          // console.log(result);
        });
    }
    if (searchedUser) {
      apiCall();
    }
  }, [searchedUser]);

  const onSearchChange = (searchValue) => {
    setSearchedUser(searchValue);
  };

  return (
    <div className='App'>
      <Search onInputChange={onSearchChange} />
      {user && <Card user={user} />}
    </div>
  );
}

export default App;
