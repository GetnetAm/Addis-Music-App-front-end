/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Banner from "./Banner";
import AduioList from "../components/AduioList";
const {loading} = useSelector(state=> state.data);

const mainContainer = css`
  width: 100%;
  height: 100%;
`;

if (loading) {
  return <div className="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>;
}

function Home() {
  return (
    <div css={mainContainer}>
      <Banner />
      <AduioList />
    </div>
  );
}

export default Home;
