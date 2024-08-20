/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import Sidebar from "./global/Sidebar";
import Home from "./pages/Home";
import FileManager from "./pages/FileManager";
import AduioList from "./components/AduioList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadMusicsStart} from "./redux/action";
import MusicList from "./components/MusicList";


const mainSite = css`
  min-height: 70vh;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const homeRoute = css`
width: 100%;

`;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMusicsStart());
  }, [dispatch]);
  return (
    <div css={mainSite}>

      
      <div>
        <Sidebar />
      </div>

      <div css={homeRoute}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fileManager" element={<FileManager />} />
          <Route path="/edit/:id" element={<FileManager/>} />
          <Route path="/all_list_music" element={<MusicList/>} />
          
          <Route path="/song" element={<AduioList />} />
         
        </Routes>
      </div>

      <ToastContainer  />
    </div>
  );
}

export default App;
