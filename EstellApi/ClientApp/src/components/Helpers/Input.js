import React from "react";
import classNames from "classnames";

import "../../styles/Input.css";

const Input = ({ defaultValue, id, className, width, label, ...attrs }) => {
  const classes = classNames("input", className);

  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {label && (
          <label className="inputLabel" htmlFor={id}>
            {label}
          </label>
        )}
        {attrs.required && <span className="inputRequired">Required</span>}
      </div>
      {defaultValue ? (
        <input
          name={id}
          id={id}
          value={defaultValue}
          className={classes}
          style={{ width: `${width}px` }}
          {...attrs}
        />
      ) : (
        <input
          name={id}
          id={id}
          value={""}
          className={classes}
          style={{ width: `${width}px` }}
          {...attrs}
        />
      )}
    </div>
  );
};

export default Input;
