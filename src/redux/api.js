import axios from "axios";

export const loadMusicApi= async()=>
    await axios.get("https://addis-music-api-lna2.onrender.com/musics");

export const createMusicApi= async(music)=>
    await axios.post("https://addis-music-api-lna2.onrender.com/musics", music);


export const deleteMusicApi= async(musicId)=>
    await axios.delete(`https://addis-music-api-lna2.onrender.com/musics/${musicId}`, musicId);


export const updateMusicApi= async(musicId, musicInfo)=>
    await axios.put(`https://addis-music-api-lna2.onrender.com/musics/${musicId}`, musicInfo);