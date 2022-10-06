import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const { children, link, bgColor, color } = props;
  return (
    <>
      <Link to={link}>
        <button style={{ backgroundColor: bgColor, color: color }}>
          {children}
        </button>
      </Link>
    </>
  );
}

export default Button;
