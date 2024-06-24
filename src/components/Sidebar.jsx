import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch,MdMood} from 'react-icons/md'
import Playlists from './Playlists'

export default function Sidebar() {
  return <Container>
    <div className="top__links">
      <div className="logo">
      <img src='./images/MOODIFY Body.svg' alt='MOODIFY body' />
      </div>
      <ul>
        <li> 
            <MdHomeFilled />
          <span>Home</span> 
        </li>
        <li> 
            <MdSearch />
          <span>Search</span> 
        </li>
        <li> 
            <IoLibrary />
          <span>Your Library</span> 
        </li>
        <li> 
            <MdMood />
          <span>Mood</span> 
        </li>
      </ul>
    </div> 
    <Playlists />
  </Container>
}
/*the above code is for the side bar components :3*/
/*this is the syle for the sidebar*/
const Container = styled.div`
background: linear-gradient(transparent, rgba(236,88,0,1)); 
background-color: rgb(0, 0, 0);
color: #2AAA8A;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
.top__links {
  display: flex;
  flex-direction: column;
.logo {
  text-align: center;
  margin: 1rem 0;
  img{
    max-inline-size: 100%;
    block-size: auto;
  }
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  li {
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
      color: White;
      }
    }
  }
}
`;