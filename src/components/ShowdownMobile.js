import React from 'react'
import ShowdownPic from '../images/showdown.png'

function ShowdownMobile(){
    return(
        <div className="cube-div">
            <h1 className="two-d">Showdown on Cygnus 8</h1>
            <img className="screenshot" src={ShowdownPic} alt="Showdown on Cygnus 8 screenshot"/>
            <div className="about">
                <b>Showdown on Cygnus 8</b> is a browser game written in Javascript, HTML, & CSS. As an intergalactic bounty hunter with a high-profile criminal in tow, you must survive a series of quickdraw matches in order to hang on to your bounty.<br></br>
                <a href="https://blake-d.github.io/ShowdownOnCygnus8/" target="_blank" rel="noreferrer">play game</a><br></br>
                <a href="https://github.com/Blake-D/ShowdownOnCygnus8" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
        </div>
    )
}

export default ShowdownMobile