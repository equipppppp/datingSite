import React from "react";

function Favorite({ bookmark, toggleBookmark }) {
  return (
    <button onClick={toggleBookmark}>
      <i className={"bi bi-bookmark" + (bookmark ? "" : "-heart-fill")}></i>
    </button>
  );
}

export default Favorite;
