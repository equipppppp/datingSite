import React from "react";
const Search = ({ searchValue, setSearchValue }) => {
  const search = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="search"
      onChange={search}
      type="text"
      value={searchValue}
      placeholder="Поиск пользователя"
    />
  );
};

export default Search;
