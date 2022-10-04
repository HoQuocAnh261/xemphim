import React from "react";
import MenuItem from "./MenuItem";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import styled from "styled-components";

function Menu() {
  return (
    <MenuPane>
      <MenuItem to="netflix" name="Home" Icon={FaHome} />
      <MenuItem to="trending" name="Thịnh Hành" Icon={FaHotjar} />
      <MenuItem to="topRated" name="Rating Cao" Icon={FaStar} />
      <MenuItem to="popular" name="Phim Hành Động" Icon={GiBandageRoll} />
      <MenuItem to="anime" name="Phim Hoạt Hình" Icon={GiRomanToga} />
      <MenuItem to="horror" name="Phim Kinh Dị" Icon={GiGhost} />
      <MenuItem to="marvel" name="Phim Marvel" Icon={GiNinjaHeroicStance} />
      <MenuItem to="comedy" name="Phim Hài" Icon={MdTheaterComedy} />
    </MenuPane>
  );
}

export default Menu;

const MenuPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.7);
  }
`;
