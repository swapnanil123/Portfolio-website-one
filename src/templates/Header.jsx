import React from 'react'
import logo from "./../assets/images/logo.svg"
import { IoIosArrowDown } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import './Header.css'

const Header = () => {
  return (
    <div className='header-main-wrapper'>
        <div className="left-wrapper">
           <img src={logo} alt="" srcset="" className='logo-image'/> 
           <span>Demo Navigation</span>
        </div>
        <div className="right-wrapper">
            <ul>
                <li>6.x <IoIosArrowDown /></li>
                <li>Docs</li>
                <li>Blog</li>
                <li>Help <IoIosArrowDown /></li>
                <li><RiTwitterXLine /></li>
                <li><FaGithub /></li>
                <li><IoSunnyOutline /></li>
            </ul>
            <div className="search-area-wrapper">
                <CiSearch className='search-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header


