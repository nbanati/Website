import React from 'react';
import pic from '../assets/namanweb.png'; 
import SideMenu from './SideMenu';
const SideBar=()=>{
    return(
        <div className="SideBar">
            <div className="ProfilePic">
                <img src={pic} alt="Naman Banati" height="100%" width="100%" />
            </div>
            Naman Banati
            <SideMenu></SideMenu>
        </div>
    );
}

export default SideBar;