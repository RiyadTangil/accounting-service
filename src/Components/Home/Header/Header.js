import React, { useEffect, useState } from 'react';
import NavBar from "../../Share/NavBar/NavBar"
import HeaderCarosel from '../HeaderCarosel/HeaderCarosel';
import "./headerStyle.css"


const Header = () => {
   
       

    return (
        <div  className="header-container">
            <NavBar ></NavBar>
            <HeaderCarosel></HeaderCarosel>
        </div>
    );
};

export default Header;