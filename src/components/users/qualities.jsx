import React from "react";
import { qualities } from "../../fakeAPI/API";

function Qualities({ chosenQuality, setChosenQuality }) {
  const selectQual = (qual) => {
    if (chosenQuality === qual) {
      setChosenQuality(null);
    } else {
      setChosenQuality(qual);
    }
  };
  return (
    <ul className="prof-flex">
      {Object.values(qualities).map((qual) => (
        <li
          onClick={() => selectQual(qual)}
          className={
            chosenQuality && chosenQuality.name === qual.name ? "activeLi" : ""
          }
          key={qual._id}
        >
          {qual.name}
        </li>
      ))}
    </ul>
  );
}

export default Qualities;
