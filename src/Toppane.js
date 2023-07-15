import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./Toppane.css";
import { SERVICE_OPTIONS } from "./constant";



const Toppane = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getOptionsObject = (options) => {
    let updatedOptions = [];
    options.forEach((option) => {
      updatedOptions.push({ label: option, value: option });
    });
  
    return updatedOptions;
  };

  return (
    <div className="toppane">
      <div className="top-left-pane">
        <div className="SelectService">
          <label className="service-label" htmlFor="service">
            Select a service :{" "}
          </label>
          <Select options={SERVICE_OPTIONS} />
        </div>

        <input className="search-bar" />
        <div className="option-dropdown">
          <Select options={getOptionsObject(props.columnOptions)} />
        </div>
        <button
          className="search-btn"
          onClick={() => console.log("selectedOption")}
        >
          Search
        </button>
      </div>

      <div className="top-right-pane">
        <div className="sorting-dropdown">
          <Select
            placeholder="Sort by"
            options={getOptionsObject(props.sortOptions)}
          />
        </div>
      </div>
    </div>
  );
};

export default Toppane;
