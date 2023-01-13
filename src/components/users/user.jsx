import Quality from "./quality";
import Favorite from "./favorite";
import { Link } from "react-router-dom";
function User({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  deleteUser,
  bookmark,
  toggleBookMark,
}) {
  return (
    <tr>
      <td>
        <Link to={`/users/${_id}`}>{name}</Link>
      </td>

      <td>
        {qualities.map((q) => (
          <Quality key={q._id} {...q} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Favorite
          toggleBookmark={() => toggleBookMark(_id)}
          bookmark={bookmark}
        />
      </td>
      <td>
        <button onClick={() => deleteUser(_id)} className={"btn btn-danger"}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default User;
