import React from "react";
import image1 from "../assets/images/cover1.jpg";
import { css } from "@emotion/react";
import { FaEllipsisH, FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */

const container = css`
  height: 190px;
  position: relative;
  width: 100%;
`;
const bannerImg = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;

`;
const mainBaner = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;
const bannerP = css`
  color: brown;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  
`;
const bannerMain = css`
  margin-top: auto;
  color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;
const bannerThree = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const addisTitle = css`
  font-size: 30px;
  color: dodgerblue;
  background: #fff;
  bottom: 0;
  font-style:italic;
  @media (max-width: 550px) {
              font-size:22px;
            } 
            @media (max-width: 400px) {
              font-size: 12;
              margin: -30px;
            } 
`;
const viewP = css`
  font-size: 14px;
`;
const viewI = css`
  margin-right: 6px;
`;
const viewSpan = css`
  color: #f1f1f1;
  margin-left: 5px;
`;
const bannerFormat = css`
  display: flex;
  align-items: center;
  
  @media (max-width: 600px) {
              display: block;
              align-items: center;
            } 
`;
const link = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-size: 16px;
  color: #f1f1f1;
  margin: 0px 15px;
  border-radius: 100vh;
  font-weight: bold;
  text-align: center;
  background: #39aa24;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 550px) {
              padding: 7px 15px;
              font-size: 14px;
            } 
`;
const follow = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-size: 16px;
  color: #f1f1f1;
  margin: 0px 15px;
  border-radius: 100vh;
  font-weight: bold;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin-right: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 550px) {
              padding: 7px 15px;
              font-size: 14px;
            } 
`;
const back = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
`;

function Banner() {
  return (
    <div css={container}>
      <img css={bannerImg} src={image1} alt="" />
      <div css={mainBaner}>
        <div>
          <p css={bannerP}>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div css={bannerMain}>
          <div>
            <div css={bannerThree}>
              <h2 css={addisTitle}>AddisSoftware</h2>
              {/* <img src={check} alt="" /> */}

              <p css={viewP}>
                <i css={viewI}>
                  <FaHeadphones />
                </i>
                Enjoy Your Self <span css={viewSpan}>Listen Hire</span>
              </p>
            </div>
          </div>
          <div css={bannerFormat}>
            <Link css={link}>Play</Link>
            <Link css={follow}>Following</Link>
          </div>
        </div>
      </div>

      <div css={back}></div>
    </div>
  );
}

export default Banner;
