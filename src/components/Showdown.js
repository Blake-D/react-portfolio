import React from 'react'
import ShowdownPic from '../images/showdown.png'

function Showdown(){
    return(
        <div className="cube-div">
            <h1 className="two-d">Showdown on Cygnus 8</h1>
            <img className="screenshot" src={ShowdownPic} alt="Showdown on Cygnus 8 screenshot"/>
        </div>
    )
}

export default Showdown