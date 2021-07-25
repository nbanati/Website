import React from 'react';
import InfoTile from './InfoTile';
import '../css/ParallexGrid.css';
const ParallexGrid=()=>{
    return(
        <div className="ParallexGrid">
            <InfoTile></InfoTile>
            <hr/>
            <InfoTile></InfoTile>
            <hr/>
            <InfoTile></InfoTile>
            <hr/>
            <InfoTile></InfoTile>
            <hr/>
            <InfoTile></InfoTile>
        </div>
    );
}

export default ParallexGrid;