import React, { useEffect, useState } from 'react'
import { updateMusicsStart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };
function UpdateMusic() {

    const dispatch = useDispatch();
   const navigate= useNavigate();
    const { musicId } = useParams();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [photo, setPhoto] = useState(null);
    const [audio, setAudio] = useState(null);
  
    useEffect(() => {
      const fetchMusic = async () => {
        const response = await fetch(`http://localhost:5000/music/${musicId}`);
        const data = await response.json();
        setTitle(data.title);
        setArtist(data.artist);
        setPhoto(data.photo);
        setAudio(data.audio);
      };
  
      fetchMusic();
    }, [musicId]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const photoBase64 = photo && typeof photo !== 'string' ? await fileToBase64(photo) : photo;
      const audioBase64 = audio && typeof audio !== 'string' ? await fileToBase64(audio) : audio;
  
      const musicData = {
        title,
        artist,
        photo: photoBase64,
        audio: audioBase64,
      };
  
      dispatch(updateMusicsStart(musicId, musicData));
      navigate('/'); // Redirect to the main page after updating
    };
  

  return (
    <div>
         <h2>Update Music</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Artist Name:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            accept="image/*"
          />
          {photo && typeof photo === 'string' && (
            <img src={photo} alt="current" style={{ width: '100px', marginTop: '10px' }} />
          )}
        </div>
        <div>
          <label>Audio:</label>
          <input
            type="file"
            onChange={(e) => setAudio(e.target.files[0])}
            accept="audio/*"
          />
          {audio && typeof audio === 'string' && (
            <audio controls>
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <button type="submit">Update Music</button>
      </form>
      
    </div>
  )
}

export default UpdateMusic
