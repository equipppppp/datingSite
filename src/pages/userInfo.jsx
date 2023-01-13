import React from "react";
import Quality from "../components/users/quality";
import { useParams, Link } from "react-router-dom";
import getUsers from "../fakeAPI/API";

const UserInfo = () => {
  const users = getUsers();
  const { id } = useParams();
  const user = users.find((user) => user._id === id);

  return (
    <>
      <div>Имя: {user.name}</div>
      <div>Профессия: {user.profession.name}</div>
      <div>
        Качества:{" "}
        {user.qualities.map((q) => (
          <Quality key={q._id} {...q} />
        ))}
      </div>
      <div>Количество встреч: {user.completedMeetings}</div>
      <div>Оценка: {user.rate}</div>
      <Link to="/users">
        <button>Вернуться ко всем пользователям</button>
      </Link>
    </>
  );
};

export default UserInfo;
