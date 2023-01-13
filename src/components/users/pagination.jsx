import React from "react";
import _ from "lodash";

function Pagination({ pageSize, count, setCurrentPage, currentPage }) {
  const pageCount = count / pageSize;

  const pages = _.range(1, pageCount + 1);
  const onChangePage = (i) => {
    setCurrentPage(i);
  };
  return (
    <ul className="pag-flex">
      {pages.length > 1
        ? pages.map((page, i) => (
            <li
              onClick={() => onChangePage(page)}
              className={currentPage === page ? "activeLi" : ""}
              key={i}
            >
              {page}
            </li>
          ))
        : null}
    </ul>
  );
}

export default Pagination;
