import React from "react";
import getUsers from "../fakeAPI/API";
import FriendsQuantity from "../components/users/friendsQuantity";
import Filters from "../components/users/filters";
import Table from "../components/users/table";
import Pagination from "../components/users/pagination";
import { paginate } from "../components/users/paginate";
import _ from "lodash";
import Search from "../components/users/search";

function AllUsers() {
  const [allUsers, setAllUsers] = React.useState(getUsers());
  const [chosenProf, setChosenProf] = React.useState(null);
  const [chosenQuality, setChosenQuality] = React.useState(null);

  const [sort, setSort] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 8;

  React.useEffect(() => {
    setCurrentPage(1);
  }, [chosenProf, chosenQuality, searchValue]);

  const toggleBookMark = (id) => {
    setAllUsers((prev) =>
      prev.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  const handleSort = (sortType) => {
    setSort(sortType);
  };

  const deleteUser = (id) => {
    setAllUsers(allUsers.filter((user) => user._id !== id));
  };

  const filteredUsers = chosenProf
    ? allUsers.filter((user) => user.profession.name === chosenProf.name)
    : allUsers;

  const qualUsers = chosenQuality
    ? filteredUsers.filter((user) => user.qualities.includes(chosenQuality))
    : filteredUsers;

  const sortedUsers = sort ? _.sortBy(qualUsers, [sort]) : qualUsers;

  const searchedUsers = sortedUsers.filter((user) =>
    user.name
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchValue.toLowerCase().replace(/\s/g, ""))
  );
  const count = searchedUsers.length;
  const paginatedUsers = paginate(searchedUsers, currentPage, pageSize);

  return (
    <>
      <FriendsQuantity count={count} chosenProf={chosenProf} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Filters
        chosenProf={chosenProf}
        setChosenProf={setChosenProf}
        setSort={setSort}
        chosenQuality={chosenQuality}
        setChosenQuality={setChosenQuality}
        setSearchValue={setSearchValue}
      />
      <Table
        toggleBookMark={toggleBookMark}
        handleSort={handleSort}
        count={count}
        paginatedUsers={paginatedUsers}
        deleteUser={deleteUser}
      />
      <Pagination
        pageSize={pageSize}
        count={count}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default AllUsers;
