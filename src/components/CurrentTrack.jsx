import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

export default function CurrentTrack() {
    const [{ token, currentlyPlaying }, dispatch]  = useStateProvider();
    console.log("component", currentlyPlaying);
    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing", 
                {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            }
        );
       if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
            id: item.id,
            name: item.name,
            artists: item.artists.map((artist) => artist.name),
            image: item.album.images[2].url,
        };  
      dispatch({type:reducerCases.SET_PLAYING, currentlyPlaying});
        }
    };
    getCurrentTrack();
    }, [token, dispatch]);
  return <Container>
    {
        currentlyPlaying && (
            <div className='track'>
                <div className='track__image'>
                    <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                </div>
                <div className='track__info'>
                    <h4>{currentlyPlaying.name}</h4>
                    <h6>{currentlyPlaying.artists.join(", ")}</h6>
                </div>
            </div>
        )
    }
  </Container>;
}

const Container = styled.div`
display: flex;
  align-items: center;
  .track {
    display: flex;
    align-items: center;
    .track__image {
      margin-right: 1rem;
      img {
        height: 50px;
        width: 50px;
        object-fit: cover;
      }
    }
    .track__info {
      display: flex;
      flex-direction: column;
      h4{
      margin: 0;
        color: white; /* Ensure text is visible */
      } 
      h6 {
       margin: 0;
           color: grey;
        } 
    }
  }
`;