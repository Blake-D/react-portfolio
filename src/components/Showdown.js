import React from 'react'
import ShowdownPic from '../images/showdown.png'

function Showdown(){
    return(
        <div className="cube-div">
            <h1>Showdown on Cygnus 8</h1>
            <img className="screenshot" src={ShowdownPic} alt="Showdown on Cygnus 8 screenshot"/>
            <div className="about">
                <b class="two-d"><a href="https://blake-d.github.io/ShowdownOnCygnus8/" target="_blank" rel="noreferrer">Showdown on Cygnus 8</a></b> is a browser game written in Javascript, HTML, & CSS. As an intergalactic bounty hunter with a high-profile criminal in tow, you must survive a series of quickdraw matches in order to hang on to your bounty.
            </div>
        </div>
    )
}

export default Showdown