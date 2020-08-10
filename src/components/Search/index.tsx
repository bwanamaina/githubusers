import React from 'react';

import './style.css';
interface ISearch {
  searchQuery: (query: string) => void;
}

const Search: React.FC<ISearch> = ({ searchQuery }) => {
  const [searchText, setSearchText] = React.useState('');

  const onSearchClick = () => {
    searchQuery(searchText);
  };
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search github user'
        value={searchText}
        onChange={(e) => {
          const { value } = e.target;
          setSearchText(value);
        }}
        autoFocus
      />
      <button type='button' onClick={onSearchClick}>
        Search User
      </button>
    </div>
  );
};

export default Search;
