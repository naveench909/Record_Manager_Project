import React, { useState } from "react";
import "./sidepane.css";
function Sidepane(props) {
  const [selectedDivisions, setSelectedDivisions] = useState({});

  const handleDivisionChange = (filterTitle, division) => {
    setSelectedDivisions((prevSelectedDivisions) => ({
      ...prevSelectedDivisions,
      [filterTitle]: division,
    }));
  };

  return (
    <div className="sidepane">
      <h2 className="title">Filters</h2>
      <div>
        {Object.entries(props.filterOptionsArray).map(
          ([filterTitle, divisions]) => (
            <div key={filterTitle}>
              <h5>{filterTitle}</h5>
              {divisions.map((division) => (
                <div>
                  <label className="lab" key={division}>
                    <input
                      type="radio"
                      name={filterTitle}
                      value={division}
                      checked={selectedDivisions[filterTitle] === division}
                      onChange={(e) =>
                        handleDivisionChange(filterTitle, e.target.value)
                      }
                    />
                    {division}
                  </label>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Sidepane;
