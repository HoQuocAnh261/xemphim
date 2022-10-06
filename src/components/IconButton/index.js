import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";

function IconButton(props) {
  const { icon, link } = props;
  return (
    <IconButtonPane>
      <Link to={`${link}`} target="_blank">
        {icon}
      </Link>
    </IconButtonPane>
  );
}

export default IconButton;

const IconButtonPane = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #60687C;
    color: #fff;
    background: #071334;
    font-size: 24px;

    :hover {
        background:#2F0A61
    }
    
`;
