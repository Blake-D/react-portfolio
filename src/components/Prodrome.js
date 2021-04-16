import React from 'react'
import Propic from '../images/prodrome_screenshot.jpg'

function Prodrome(){
    return(
        <div className="cube-div">
            <h1 className="eurostile">Prodrome</h1>
            <img className="screenshot" src={Propic} alt="Prodrome screenshot"/>
        </div>
    )
}

export default Prodrome