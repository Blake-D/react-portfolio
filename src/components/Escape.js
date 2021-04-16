import React from 'react'
import EscapePic from '../images/escape_screenshot.png'

function Escape(){
    return(
        <div className="cube-div">
            <h1 className="eurostile">Escape from D-1471</h1>
            <img className="screenshot" src={EscapePic} alt="Escape from D-1471 screenshot"/>
        </div>
    )
}

export default Escape