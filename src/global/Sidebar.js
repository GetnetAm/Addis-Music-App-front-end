/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { FaEllipsisH } from "react-icons/fa";
import logo from "../assets/images/addis music1.jpg";
import { FaSearch } from "react-icons/fa";
import Menu from "../components/Menu";
import { MenuList } from "../components/MenuList";
import MenuPlayList from "../components/MenuPlayList";
import TrackList from "../components/TrackList";


const sidebar = css`
  width: 230px;
  height: 100%;
  min-height: 100vh;
  backdrop-filter: blur(10px);
  padding: 25px 20px;
  overflow: hidden;
  border-radius: 7px;
  background: #575757;
  box-shadow: 20px 20px 60px #4a4a4a, -20px -20px 60px #646464;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 600px) {
          width: 40px;
          min-width: 40px;
        }
`;


const container = css`
  color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;




function Sidebar() {

  return (

    <div css={sidebar}>
      <div css={container}>
        <i>
          <img
            src={logo}
            alt="logo"
            css={css`
              width: 40px;
              height: 40px;
              border-radius: 50%;
              align-items: center;
              @media (max-width: 550px) {
             width: 45px;
            } 
            `}
          />
        </i>
        <h2
          css={css`
            font-size: 20px;
            @media (max-width: 600px) {
              display: none;
            }
          `}
        >
          Addis Music
        </h2>
        <i>
          <FaEllipsisH
            css={css`
              font-size: 20px;
              @media (max-width: 550px) {
              display: none;
            } 
            `}
          />
        </i>
      </div>
    
        <div
          css={css`
            width: 80%;
            height: 45px;
            position: relative;
            margin-top: 20px;
            color: #848484;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
          `}
        >
          <input
            type="text"
            placeholder="Search..."
            css={css`
              width: 100%;
              height: 100%;
              outline: none;
              border: none;
              background: rgba(0, 0, 0, 0.5);
              padding-left: 45px;
              color: #f1f1f1;
              font-size: 14px;
              font-weight: bold;
               @media (max-width: 550px) {
              display: none;
            } 
            `}
          />
          <i>
            <FaSearch
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                color: #848484;
                width: 45px;
                height: 45px;
                align-items: center;
                height: 45px;
                text-align: center;
                line-height: 45px;
                font-size: 20px;
                @media (max-width: 550px) {
              display: none;
            } 
              `}
            />
          </i>
        </div>

       <Menu title={"menu"} menuObject={MenuList} />
       <MenuPlayList />
       <TrackList />

  
    </div>
  );
}

export default Sidebar;
