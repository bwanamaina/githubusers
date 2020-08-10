import React from 'react';

const Search = ({ onInputChange }) => {
  const [name, setName] = React.useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onButtonClick = () => {
    if (name) {
      onInputChange(name);
    }
  };

  return (
    <div>
      <input type='text' onChange={onChange} value={name} />
      <button onClick={onButtonClick} type='button'>
        Search
      </button>
    </div>
  );
};

export default Search;
