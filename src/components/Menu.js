import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const menuContainer = css`
  margin: 15px 0;
`;
const menuP1 = css`
  color: wheat;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
const menuUl = css`
  width: 100%;
  padding: 0;
`;
const menuLi = css`
  list-style-type: none;
  text-decoration: none;
  margin: 5px 0;
  width: 100%;
  padding: 5px 0px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -15px;
    width: 0px;
    height: 100%;
    background: #49e12e;
    border-radius: 5px;
  }
  &:hover::before {
    width: 5px;
    transition: 0.3s;
  }
  &:active::before {
    width: 5px;
    transition: 0.3s;
  }
`;

const menuLink1 = css`
  text-decoration: none;
  color: #f1f1f1;
  display: flex;
  align-items: center;
  font-size: 16px;
  &:hover {
    color: dodgerblue;
    transition: 0.3;
  }
  &:active {
    color: dodgerblue;
    transition: 0.3;
  }
`;

const menuI1 = css`
  font-size: 18px;
  margin-right: 15px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const menuSpan1 = css`
  @media (max-width: 550px) {
    display: none;
  }
`;

function Menu({ title, menuObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="MenuContainer" css={menuContainer}>
      <p css={menuP1}>{title}</p>
      <ul css={menuUl}>
      
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id} css={menuLi}>
              {" "}
              <Link to={menu.to} css={menuLink1}>
                <i css={menuI1}>{menu.icon}</i>
                <span css={menuSpan1}>{menu.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;
