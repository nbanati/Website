import React from 'react';
//import InfoTile from './InfoTile';
import '../css/ParallexGrid.css';
import '../css/Fonts.css';
import location from '../assets/location.png'; 
const ParallexGrid=()=>{
    return(
        <div className="ParallexGrid">
            <div className="InfoTile">
                <div className="tileContent">
                    <div className="nameTitle">Naman Banati</div>
                    <div className="normalText">Hi! I am graduate student at <a href="https://www.stonybrook.edu/">Stony Brook University </a> pursuing
                     MS in Computer Science. I am passionate about solving problems and using technology as a tool to help build products that make our lives simpler.
                     I have around 2 years of experience in the software industry working in big multinationals as well as fast paced start-ups.
                    </div>
                    <br/>
                    <img src={location} alt="Location" height="20px" width="20px"/> Stony Brook, NY <br/>
                    iconphone +1 (631) 827-1229 <br/>
                    emailicon naman.banati@gmail.com <br/>
                    pgp key link <br/>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="InfoTile">
                <div className="tileContent">
                    <div className="subHeading">EXPERIENCE</div>
                    <div className="normalText"></div>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="InfoTile">
                <div className="tileContent">
                    <div className="subHeading">EDUCATION</div>
                    <div className="normalText"></div>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="InfoTile">
                <div className="tileContent">
                    <div className="subHeading">PROJECTS</div>
                    <div className="normalText"></div>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="InfoTile">
                <div className="tileContent">
                    <div className="subHeading">SKILLS</div>
                    <div className="normalText"></div>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="InfoTile">
                <div className="tileContent">
                    <div className="subHeading">PUBLICATIONS</div>
                    <div className="normalText"></div>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default ParallexGrid;