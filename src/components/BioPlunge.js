import React from 'react'
import BioPic from '../images/bioplunge_screenshot.jpg'

function BioPlunge(){
    return(
        <div className="cube-div">
            <h1 className="eurostile">BioPlunge: Update</h1>
            <img className="screenshot" src={BioPic} alt="BioPlunge: Update screenshot"/>
        </div>
    )
}

export default BioPlunge