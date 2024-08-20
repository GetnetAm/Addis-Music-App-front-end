import React from "react";
import cd from "../assets/images/cd2.jpg";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const trackContainer = css`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  &:hover {
    color: dodgerblue;
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
const trackImg = css`
  display: flex;
  align-items: center;
`;
const cdImg = css`
  width: 50px;
`;
const trackP = css`
  margin-left: 10px;
  color: #f1f1f1;
  font-size: 14px;
`;
const artName = css`
  display: block;
  font-size: 12px;
  color: #f1f1f1;
`;
const volumeController = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  margin-top: 20px;
  color: #f1f1f1;
`;
const volumeI = css`
  font-size: 18px;
  &:hover {
    color: dodgerblue;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const volumeInput = css`
  position: relative;
  height: 5px;
  border: none;
  outline: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  appearance: none;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: #49e12e;
    width: 50%;
    height: 100%;
    border-radius: 10px;
    z-index: 2;
    transition: width 250ms linear;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 20px;
    border-radius: 10px;
    background-color: #f1f1f1;
    border: 2px solid #000;
    cursor: pointer;
    position: relative;
    margin: -2px 0 0;
    z-index: 3;
    box-sizing: border-box;
    transition: all 250ms linear;
  }
`;
const musicNoteI = css`
  font-size: 18px;
  &:hover {
    color: dodgerblue;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const desctopI = css`
  font-size: 18px;
  &:hover {
    color: dodgerblue;
    transition: 0.3s;
    cursor: pointer;
  }
`;
function TrackList() {
  return (
    <div css={trackContainer}>
      <div css={trackImg}>
        <img css={cdImg} src={cd} alt="cd" />
        <p css={trackP}>
          Sample Name <span css={artName}>Artist</span>
        </p>
      </div>
      <div css={volumeController}>
        <i css={volumeI}>
          <FaVolumeHigh />
        </i>
        <input css={volumeInput} type="range" />
        <i css={musicNoteI}>
          <BsMusicNoteList />
        </i>
        <i css={desctopI}>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export default TrackList;
