/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Banner from "./Banner";
import AduioList from "../components/AduioList";
import { useSelector } from "react-redux";


const mainContainer = css`
  width: 100%;
  height: 100%;
`;


function Home() {
  
  const {loading} = useSelector(state=> state.data);



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


  return (
    <div css={mainContainer}>
      <Banner />
      <AduioList />
    </div>
  );
}

export default Home;
