import React from "react";
import Professions from "./professions";
import Qualities from "./qualities";

function Filters({
  chosenProf,
  setChosenProf,
  setSort,
  chosenQuality,
  setChosenQuality,
  setSearchValue,
}) {
  const resetFilters = () => {
    setChosenProf(null);
    setSort(null);
    setChosenQuality(null);
    setSearchValue("");
  };
  return (
    <>
      <div className="filtersContainer">
        <div className="filters">
          <Professions chosenProf={chosenProf} setChosenProf={setChosenProf} />
          <Qualities
            chosenQuality={chosenQuality}
            setChosenQuality={setChosenQuality}
          />
        </div>
        <button onClick={resetFilters}>Сброс фильтров</button>
      </div>
    </>
  );
}

export default Filters;
