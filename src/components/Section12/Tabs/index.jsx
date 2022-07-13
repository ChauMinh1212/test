import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

Tabs.propTypes = {};

function Tabs({ tabs }) {
  const [isActive, setIsActive] = useState(1);
  const handleOnClick = (id) => {
    if (id === isActive) return;
    setIsActive(id);
  };
  const handleOnChange = (id) => {
    if(id === isActive) return;
    setIsActive(id);
  }
  return (
    <>
      <div className="tab-radio">
        {tabs.map((x, index) => (
          <label>
            <input
              type="radio"
              value={x.title}
              onChange={() => handleOnChange(x.id)}
              checked={isActive === x.id ? true : false}
            />
            {x.title}
          </label>
        ))}
      </div>
      <div className="tab-title">
        {tabs.map((x, index) => (
          <div
            className={x.id === isActive ? "active" : ""}
            onClick={() => handleOnClick(x.id)}
          >
            {x.title}
          </div>
        ))}
      </div>
      <div className="tab-contents">
        {tabs.map((x, index) => (
          <div
            className={isActive === x.id ? "tab-content active" : "tab-content"}
          >
            <div className="ques">{x.question}</div>
            <div className="ans">{x.answer}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tabs;
