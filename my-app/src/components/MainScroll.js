import React from 'react';
import NavBar from './NavBar';
import '../css/NavBar.css';
import ParallexGrid from './ParallexGrid';
import '../css/ParallexGrid.css';
import myCartoon from '../assets/snap.png';
import myCartoon1 from '../assets/snap2e.png';
import myCartoon2 from '../assets/snap3e.png';
import myCartoon3 from '../assets/snap4e.png';
const MainScroll=()=>{

    const animateCartoon=()=>{
        console.log("iwashere");
        let count=0;
        while(count<=1000)
        {
            count++;
            document.getElementById("mycartoon").src=myCartoon1;

        setTimeout(function() {
            document.getElementById("mycartoon").src=myCartoon2;
          }, 1000);
        
        setTimeout(function() {
            document.getElementById("mycartoon").src=myCartoon3;
          }, 1000);
        }
        
    };

    return(
        <div className="MainScroll">
            <NavBar></NavBar>
            <ParallexGrid></ParallexGrid>
            <img src={myCartoon} alt="My Cartoon" width="30%" height="30%" className="cartoon" id="mycartoon" onMouseOver={animateCartoon} />
        </div>
    );
}

export default MainScroll;