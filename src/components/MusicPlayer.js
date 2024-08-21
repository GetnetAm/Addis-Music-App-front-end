/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import {
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
  FaDownload,
} from "react-icons/fa";

const musicPlayer = css`
  width: 100%;
  padding: 10px;
  display: flex;
  background: grey;
  @media (max-width: 550px) {
    height: 100px;
  }
`;
const songImage = css`
  min-height: 80px;
  height: 120px;
  width: 120px;
  min-height: 120px;
  overflow: hidden;
  border-radius: 35px;
  background: #838383;
  box-shadow: 20px 20px 60px #6f6f6f, -20px -20px 60px #979797;

  @media (max-width: 550px) {
    width: 50px;
    height: 50px;
  }
`;
const songImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const songAttributes = css`
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const top = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const left = css`
  color: #595959;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (max-width: 550px) {
    margin: 0px 5px;
    font-size: 12px;
  }
`;
const middle = css`
  color: #595959;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (max-width: 550px) {
    margin: 0px 5px;
    display: flex;
    flex-direction: row;
  }
`;
const right = css`
  color: #595959;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (max-width: 550px) {
    margin: 0px 5px;
  }
`;

const back = css`
  display: flex;
`;
const backward = css`
  margin-left: 10px;
  @media (max-width: 550px) {
    margin-left: 3px;
    display: flex;
  }
`;

const bottom = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding: 0px 15px;
  @media (max-width: 550px) {
    padding: unset;
    width: 70%;
  }
`;
const progressBar1 = css`
  width: 78%;
  position: relative;
  height: 5px;
  outline: none;
  border: none;
  appearance: none;
  border-radius: 10px;
  cursor: pointer;
  background: #fff;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    /* background: #848484; */
    background: dodgerblue;
    width: 50%;
    height: 100%;
    border-radius: 10px;
    z-index: 2;
    transition: all 0.3s ease;
  }

  & ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    outline: none;
  }

  &::-moz-range-track {
    width: 78px;
    height: 5px;
    outline: none;
    border: none;
    appearance: none;
    border-radius: 10px;
    background: #ccccff;
    /* background: rgba(83, 61, 72, 0.8); */
    cursor: pointer;
  }

  &::-moz-range-progress {
    background: dodgerblue;
    width: 50%;
    height: 100%;
    border-radius: 10px;
    z-index: 2;
    transition: all 0.3s ease;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    outline: none;
  }
  @media (max-width: 550px) {
    width: 40%;
  }
`;

const playPause = css`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 100%;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const backI = css`
  color: black;
  margin: 0px 15px;
  font-size: 18px;
`;
const FaBackI = css`
  margin: 0px 15px;
  font-size: 18px;
  color: black;
`;

const downloadI = css`
  margin: 0px 15px;
  font-size: 18px;
  color: yellowgreen;
`;
const RightI = css`
  margin: 0px 15px;
  font-size: 18px;
  @media (max-width: 550px) {
    display: none;
  }
`;

const PauseI = css``;
const NPauseI = css``;
const ForwardI = css`
  color: black;
`;
const BackwardI = css`
  margin-left: 10px;
  color: black;
`;

const currentTimeOne = css`
  color: #f1f1f1;
  font-size: 12px;
  font-weight: bold;
`;
const durationOne = css`
  color: #f1f1f1;
  font-size: 12px;
  font-weight: bold;
`;

function MusicPlayer({ song, imgSrc, auto }) {



  const [isPlaying, setPlay] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);


  const audioPlayer = useRef();
  const progressBar = useRef();
  

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  // const changePlayPause = () => {
  //   const prevValue = isPlaying;
  //   setPlay(!prevValue);

  //   if (!prevValue) {
  //     audioPlayer.current.play();
  //     animationRef.current = requestAnimationFrame(whilePlaying);
  //     setPlay(true);
  //   } 
    
  //   else {
  //     audioPlayer.current.pause();
  //     cancelAnimationFrame(animationRef.current);
  //   }
  // };


  const changePlayPause = () =>{
    if(audioPlayer.current.paused){
      audioPlayer.current.play();
      
      setPlay(true);
    }else{
      audioPlayer.current.pause();
      setPlay(false);
    }
  }




  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };


  // const whilePlaying = () => {

  //   progressBar.current.value = audioPlayer.current.currentTime;
  //   changeCurrentTime();
  //   // need to run more than once
  //   animationRef.current = requestAnimationFrame(whilePlaying);
  // };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
  };



 

  return (
    <div css={musicPlayer}>
      <div css={songImage}>
        {imgSrc ? (
          <img css={songImg} src={imgSrc} alt="" />
        ) : (
          <img
            css={songImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc47DJrWioP_CUFT7CHw7Dgs7AI9hhD419Xw&s"
            alt="upload"
          />
        )}
        <img src={imgSrc} alt="" css={songImg} />
      </div>
      <div css={songAttributes}>
        
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div css={top}>
          <div css={left}>
            <i css={downloadI}>
              <FaDownload />
            </i>
          </div>

          <div css={middle}>
            <div css={back}>
              <i css={backI}>
                <FaStepBackward />
              </i>
              <i css={FaBackI}>
                <FaBackward />
              </i>
            </div>
            <div css={playPause} onClick={changePlayPause}>
              {isPlaying ? (
                <i css={PauseI}>
                  <FaPause />
                </i>
              ) : (
                <i css={NPauseI}>
                  <FaPlay />
                </i>
              )}
            </div>

            <div css={backward}>
              <i css={ForwardI}>
                <FaForward  />
              </i>
              <i css={BackwardI}>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div css={right}>
            <i css={RightI}>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div css={bottom}>
          <div className="currentTime" css={currentTimeOne}>
            {calculateTime(currentTime)}
          </div>
          {/* <div className="currentTime">{calculateTime(currentTime)}</div> */}
          <input
            type="range"
            css={progressBar1}
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}
          />

          <div css={durationOne}>
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
