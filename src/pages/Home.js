/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Banner from "./Banner";
import AduioList from "../components/AduioList";

const mainContainer = css`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <div css={mainContainer}>
      <Banner />
      <AduioList />
    </div>
  );
}

export default Home;
