import React from "react";
import styledComponents from "styled-components";

function IconButton(props) {
  const { icon, link } = props;
  return (
    <IconButtonPane>
      <a href={`${link}`} target="_blank" rel="noreferrer ">
        {icon}
      </a>
    </IconButtonPane>
  );
}

export default IconButton;

const IconButtonPane = styledComponents.a`
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
