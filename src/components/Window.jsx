import React from "react";

export default function Window(props) {
  return (
    <div className="window">
      <div className={props.size === "big" ? "bar bar-big" : "bar"}>
        <div className="bar-buttons">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        {props.size === "big" ? <div className="text-bar"></div> : null}
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}
