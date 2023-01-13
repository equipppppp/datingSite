import React from "react";
import { professions } from "../../fakeAPI/API";

function Professions({ chosenProf, setChosenProf }) {
  const selectProf = (prof) => {
    if (chosenProf === prof) {
      setChosenProf(null);
    } else {
      setChosenProf(prof);
    }
  };
  return (
    <ul className="prof-flex">
      {Object.values(professions).map((profession) => (
        <li
          onClick={() => selectProf(profession)}
          className={
            chosenProf && chosenProf.name === profession.name ? "activeLi" : ""
          }
          key={profession._id}
        >
          {profession.name}
        </li>
      ))}
    </ul>
  );
}

export default Professions;
