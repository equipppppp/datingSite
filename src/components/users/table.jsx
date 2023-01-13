import React from "react";
import User from "./user";

const headers = [
  { sortType: "name", value: "Имя" },
  { value: "Качества" },
  { value: "Профессия" },
  { sortType: "completedMeetings", value: "Встретился раз" },
  { sortType: "rate", value: "Рейтинг" },
  { sortType: "bookmark", value: "Избранные" },
  { value: "" },
];

function Table({
  count,
  paginatedUsers,
  deleteUser,
  handleSort,
  toggleBookMark,
}) {
  return (
    <>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th
                  onClick={
                    header.sortType
                      ? () => handleSort(header.sortType)
                      : undefined
                  }
                  role={header.sortType && "button"}
                  key={i}
                  scope="col"
                >
                  {header.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <User
                toggleBookMark={toggleBookMark}
                deleteUser={deleteUser}
                key={user._id}
                {...user}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
