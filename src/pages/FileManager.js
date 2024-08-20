import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMusicsStart, updateMusicsStart } from '../redux/action';
import { toast } from 'react-toastify';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from 'react-redux';



const formStyle= css`
  display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 550px) {
      padding: 15px;
      max-width: 400px;
            }

`;
const formStyleTwo= css`
  margin-bottom: 15px;

`;

const lableStyle= css`
  font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
    @media (max-width: 550px) {
            width: 70%;
            } 

`;
const inputStyle= css`
 width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
    border-color: #007bff;
    @media (max-width: 550px) {
            width: 70%;
            } 

`;
const inputStyleFile= css`
 width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    font-size: 0.9rem;
    @media (max-width: 550px) {
            width: 70%;
            } 
    

`;
const buttonStyle= css`
 padding: 12px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
      background-color: #0056b3;
    }
    @media (max-width: 550px) {
      padding: 10px 15px;
      font-size: 0.9rem;
      width: 60%;
            }

`;
const imageUpload=css`
text-align: center;
width: 120px;
height: 90px;
margin-left: 10%;
@media (max-width: 550px) {
            width: 90px;
            height: 75px;
            } 

`;
const defaultImg= css`
width: 100%;
height: 100%;
object-fit: cover;

`;










// Helper function to convert file to Base64
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

function FileManager({ musicToEdit, clearEdit }) {
  const {loading} = useSelector(state=> state.data);

  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [photo, setPhoto] = useState(null);
  const [audio, setAudio] = useState(null);

  // const {id} = useParams();

  useEffect(() => {
    if (musicToEdit) {
      setTitle(musicToEdit.title);
      setArtist(musicToEdit.artist);
      setPhoto(musicToEdit.photo);  // Base64 image string
      setAudio(musicToEdit.audio);  // Base64 audio string
    }
  }, [musicToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert files to Base64
    const photoBase64 = photo ? await fileToBase64(photo) : null;
    const audioBase64 = audio ? await fileToBase64(audio) : null;

    const musicData = {
      title,
      artist,
      photo: photoBase64,
      audio: audioBase64,
    };

    if (musicToEdit) {
      dispatch(updateMusicsStart(musicToEdit.id, musicData));
      toast.success("You Are Updated Successfully");
      clearEdit();
    } else {
      dispatch(createMusicsStart(musicData));
    }

    // Reset form
    setTitle('');
    setArtist('');
    setPhoto(null);
    setAudio(null);

    navigate("/");
    toast.success("You Are Created Successfully")
  };


  if (loading) {
    return <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>;
  }


  
  return (
    <div>
      
   <form onSubmit={handleSubmit}  css={formStyle}>
   <h2>{musicToEdit ? 'Update Music Hire' : 'Upload Music Hire'}</h2>
      <div css={formStyleTwo}>
        <label css={lableStyle}>Song Title:</label>
        <input css={inputStyle}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
    
      <div>
        <label css={lableStyle} >Artist Name:</label>
        <input css={inputStyle}
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </div>
      <div>
        <label css={lableStyle}>Music Cover Photo:</label>
        <input css={inputStyleFile}
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          accept="image/*"
          required
        />
        {musicToEdit ?
         <div css={imageUpload}>
         {photo && typeof photo === 'string' && (
            <img css={defaultImg} src={photo} alt="current"  />
          )}
         </div>
          : 
         <div css={imageUpload}>
         {
           photo ?<img css={defaultImg} src={URL.createObjectURL(photo)} alt='' />:
           <img css={defaultImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNU61bFkEYs08Qatfl-S5PY4Dywiv5L7gqA&s' alt='upload' />
 
 
         }
         </div>

         }
       
        
      </div>
      <div>
        <label css={lableStyle}>Music File Audio:</label>
        <input css={inputStyleFile}
          type="file"
          onChange={(e) => setAudio(e.target.files[0])}
          accept="audio/*"
          required

        />

        <div>

        {/* {musicToEdit ?  */}
         {audio && typeof audio === 'string' && (
            <audio controls>
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        
        {/* :''} */}
          
       
        </div>
      </div>
      <button css={buttonStyle} type="submit">{musicToEdit ? 'Update Music' : 'Add Music'}</button>
    </form>
    
      
    </div>
  )
}

export default FileManager
