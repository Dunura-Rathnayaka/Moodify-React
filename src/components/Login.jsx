import React from 'react';
import styled from 'styled-components';

export default function Login() {
  const handleClick = () => {
    const clientId = "466e1b1dc6774871af909df19197438c";
    const redirectUrl = "https://dunura-rathnayaka.github.io/Moodify-React/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      'user-read-email', 
      'user-read-private', 
      'user-modify-playback-state', 
      'user-read-playback-state', 
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`; 
  };

  return (
    <Container>
      <img src='./images/MOODIFY large.png' alt='MOODIFY' />
      <button onClick={handleClick}>Connect Spotify</button> 
    </Container>  
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #A24502;
  gap: 5rem;

  img {
    height: 80vh;
  }

  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #FFA700;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
