import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { PlayList } from "./PlayList";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const container = css`
  cursor: pointer;
  margin-left: 15px 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
const menuPlayList = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  color: #f1f1f1;
  margin-bottom: 10px;
`;
const playListP = css`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`;
const playListI = css`
  cursor: pointer;
  color: #f1f1f1;
`;
const listContainer = css`
  height: 140px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;
const listItem = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f1f1f1;
  margin: 10px 0;
`;
const listItemI = css`
  cursor: pointer;
  color: #f1f1f1;
  margin-right: 15px;
`;
const listItemP = css`
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline;
`;
const deleteT = css`
  color: red;
`;

function MenuPlayList() {
  return (
    <div css={container}>
      <div css={menuPlayList}>
        <p css={playListP}>PlayList</p>
        <i css={playListI}>
          <FaPlusCircle />
        </i>
      </div>
      <div css={listContainer}>
        {PlayList &&
          PlayList.map((list) => (
            <div css={listItem} key={list.id}>
              <i css={listItemI}>
                <BsMusicNoteList />
              </i>
              <p css={listItemP}>{list.name}</p>

              <i>
                <FaTrash css={deleteT} />
              </i>
            </div>
          ))}
      </div>

      <div></div>
    </div>
  );
}

export default MenuPlayList;
