import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { loadMusicsStart } from "../redux/action";
import MusicPlayer from "./MusicPlayer";

const musicListPlay = css`
  height: 100px;
  align-items: baseline;

  position: sticky !important;
`;

const songsContainer = css`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  gap: 20px;
  height: 470px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const songsList = css`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px;
  margin: 10px;
  height: 80px;
  width: 100px;
  @media (max-width: 550px) {
    width: 70px;
    height: 65px;
  }
`;

const SinglSong = css``;
const imgBox = css`
  width: 80px;
  height: 80px;
  @media (max-width: 550px) {
    width: 55px;
    height: 55px;
  }
`;
const Picture = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const songName = css``;
const spanArtist = css``;

const sectionDesc = css``;

function MusicList() {
  const dispatch = useDispatch();
  const { musics, loading } = useSelector((state) => state.data);
  const [song, setSong] = useState(musics.song);
  const [img, setImage] = useState(musics.photo);

  useEffect(() => {
    dispatch(loadMusicsStart());
  }, [dispatch]);

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
  };

  if (loading) {
    return (
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
  return (
    <div>
      <div className="songContainer" css={songsContainer}>
        {musics &&
          musics.map((song, index) => (
            <div
              className="songs"
              css={songsList}
              key={song.id}
              onClick={() => setMainSong(song?.audio, song?.photo)}
            >
              <div css={SinglSong}>
                <div css={imgBox}>
                  <img src={song?.photo} alt="" css={Picture} />
                </div>

                <div css={sectionDesc}>
                  <p css={songName}>
                    {song?.title} <span css={spanArtist}>{song?.artist}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div css={musicListPlay}>
        <MusicPlayer song={song} imgSrc={img} />
      </div>
    </div>
  );
}

export default MusicList;
