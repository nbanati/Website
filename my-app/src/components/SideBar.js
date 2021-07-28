import React from 'react';
import pic from '../assets/namanln.png'; 
import SideMenu from './SideMenu';
const SideBar=()=>{
    return(
        <div className="SideBar">
            <div className="ProfilePic">
                <img src={pic} alt="Naman Banati" height="90%" width="90%" />
            </div>
            <div className="sideBarContent">
                <h1>Naman Banati</h1>
            <SideMenu></SideMenu>
            </div>
        </div>
    );
}

export default SideBar;