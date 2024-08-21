/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { useDispatch, useSelector } from "react-redux";
import { FaPenAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import { deleteMusicstart, loadMusicsStart } from "../redux/action";
import FileManager from "../pages/FileManager";


const AudioList = css`
  padding: 10px 30px;
  @media (max-width: 550px) {
    padding: 10px 5px;
  }
`;
const title = css`
  font-size: 18px;
  color: dodgerblue;
  text-align: center;
  height: 10px;
`;
const spanT = css`
  color: black;
  font-size: 14px;
  font-style: italic;
`;
const songsContainer = css`
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #e1ecf4;
  
`;
const songsList = css`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: black;
  width: 80%;
  margin: 10px 0;
  padding: 5px;
  &:hover,
  :active {
    color: dodgerblue;
    transition: 0ms.3s;
    @media (max-width: 550px) {
    margin: 5px 0;
    padding: 3px;
  }
  }
`;
const count = css`
  margin-right: 10px;
  @media (max-width: 550px) {
    margin-right: 3px;
  }
`;
const SinglSong = css`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
 
`;

const imgBox = css`
  width: 45px;
  height: 45px;
  min-width: 45px;
  border-radius: 0.5rem;
  background: #555;
  margin-right: 10px;
  overflow: hidden;
  @media (max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`;
const Picture = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const section = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
 
`;
const songName = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  @media (max-width: 550px) {
    width: 40%;
  }
`;
const spanArtist = css``;
const hits = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    justify-content: space-between;
    margin-top: 5px;
    width: 100%;
  }
`;

const duration = css`
  margin-right: 15px;
`;
const edit = css`
  color: dodgerblue;
  font-size: 25px;
  margin-right: 50px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

const DI = css``;

const noDataFound = css`
  text-align: center;
  align-items: center;
`;

const trash = css`
  color: red;
  font-size: 25px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

const editStyle=css`
  color: dodgerblue;
  font-size: 25px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;



const link = css`
  text-decoration: none;
`;

const modalStyle = css`
  width: 500px;
  @media (max-width: 550px) {
            width: 60%;
            } 
`;

const headerStyle = css`
  background-color: #70d9ee;
  height: 40px;
`;
const musicFooter = css`
  position: sticky;
  bottom: 0;
`;




function AduioList() {
  const { musics, loading } = useSelector((state) => state.data);
  const [musicToEdit, setMusicToEdit] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [song, setSong] = useState(musics.song);
  const [img, setImage] = useState(musics.photo);
  // const [auto, setAuto] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(loadMusicsStart());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you want to Delete this user ?")) {
      dispatch(deleteMusicstart(id));
      toast.success("You Are Deleted Successfully");
      navigate("/");
    }
  };

  const handleEdit = (song) => {
    setMusicToEdit(song);
  };

  const clearEdit = () => {
    setMusicToEdit(null);
  };

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    // setAuto(true);
  };

  if (!musics || musics.length === 0) {
    return (
      <div css={noDataFound}>
        <h2>No music available</h2>
      </div>
    );
  }


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
    <div css={AudioList}>
      <Modal
        title="Update Music"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        css={modalStyle}
      >
        <FileManager musicToEdit={musicToEdit} clearEdit={clearEdit} />
      </Modal>

      <div css={headerStyle}>
        <h2 css={title}>
          The list <span css={spanT}>({musics.length}) songs</span>
        </h2>
      </div>

      <div className="songContainer" css={songsContainer}>
          {musics &&
            musics.map((song, index) => (
            <div
              className="songs"
              css={songsList}
              key={song.id}
              onClick={() => setMainSong(song?.audio, song?.photo)}
            >
              <div css={count}>
                {" "}
                <p>{`#${index + 1}`}</p>
              </div>
              <div css={SinglSong}>
                <div css={imgBox}>
                  <img src={song?.photo} alt="" css={Picture} />
                </div>

                <div css={section}>
                  <p css={songName}>
                    {song?.title} <span css={spanArtist}>{song?.artist}</span>
                  </p>

                  
                  <div css={hits}>
                    <p css={duration}>
                      <i css={DI}>
                        <Button
                          css={link}
                          onClick={() => handleDelete(song.id)}
                        >
                          <FaTrash css={trash} />
                        </Button>
                      </i>
                    </p>
                    <div css={edit}>
                      <Button onClick={showModal}>
                        <Link css={link} onClick={() => handleEdit(song)}>
                          <FaPenAlt css={editStyle} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div css={musicFooter}>
        <MusicPlayer song={song} imgSrc={img} />
      </div>
    </div>
  );
}

export default AduioList;
