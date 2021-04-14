import React from 'react'
import BioPic from '../images/bioplunge_screenshot.jpg'

function BioPlunge(){
    return(
        <div className="cube-div">
            <h1>BioPlunge: Update</h1>
            <img className="screenshot" src={BioPic} alt="BioPlunge: Update screenshot"/>
            <div className="about">
                <b class="eurostile">BioPlunge: Update</b> is a passion project I have been developing for a couple of years. You play as a non-player character (NPC) in a fictional first-person shooter who is beginning to suspect he's merely an NPC. As his self-awareness grows, he begins openly defying commands from the player. Should he suspect the player is using reverse psychology, he adapts his behavior accordingly. More information will be made available as this project approaches Beta testing.
            </div>
        </div>
    )
}

export default BioPlunge