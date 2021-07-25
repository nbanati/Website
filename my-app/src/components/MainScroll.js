import React from 'react';
import NavBar from './NavBar';
import '../css/NavBar.css';
import ParallexGrid from './ParallexGrid';
import '../css/ParallexGrid.css';
import myCartoon from '../assets/snap.jpg';
const MainScroll=()=>{
    return(
        <div className="MainScroll">
            <NavBar></NavBar>
            <ParallexGrid></ParallexGrid>
            <img src={myCartoon} alt="My Cartoon" width="30%" height="30%" className="cartoon" />
        </div>
    );
}

export default MainScroll;