import React from 'react'
import { Link } from 'react-router-dom';
import {  MdViewHeadline } from "react-icons/md";
import './Header.css';
import Youtubelogo from '../img/youtube.png';
import searchbarlogo from '../img/search.PNG'
import videologo from '../img/video.PNG'
import gridlogo from '../img/grid.PNG'
import bellogo from '../img/bell.PNG'
import userlogo from '../img/users.png'



const Header = () => {
  return (
    <div className='navbar '>
        <img src={Youtubelogo} class="logo" alt="youtube-logo"></img>
        <div className="search-box">
            <input type="text" name="" id="" class="search-bar" placeholder="search"/>
            <button class="search-btn"><img src={searchbarlogo} alt="" /></button>
        </div>

        <div className="user-options">
            <img src={videologo} class="icon" alt=""></img>
            <img src={gridlogo} class="icon" alt=""></img>
            <img src={bellogo} class="icon" alt=""></img>
            <div className="user-dp">
                <img src={userlogo} alt=""></img>
            </div>
        </div>
    </div>
  )
}

export default Header