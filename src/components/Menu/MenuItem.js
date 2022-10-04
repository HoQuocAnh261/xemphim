import React from "react";
import styled from "styled-components";
import { randomRgbaColor } from "../../utils";
import { Link } from "react-scroll";

function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-150}
    >
      <Item>
        <Icon className="icon" style={{ color: randomRgbaColor(1) }} />
        <span> {name} </span>
      </Item>
    </Link>
  );
}

export default MenuItem;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin-left: 2px;
  padding: 4px 6px;
  cursor: pointer;
  .icon {
    font-size: 30px;
    margin-right: 8px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: #fff;
    }
  }
`;
