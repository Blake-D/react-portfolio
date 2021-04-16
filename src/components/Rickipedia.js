import React from 'react'
import RickPic from '../images/rickipedia_home.png'

function Rickipedia(){
    return(
        <div className="cube-div">
            <h1 id="schwifty">Rickipedia & Mortiverse</h1>
            <img className="screenshot" src={RickPic} alt="Rickipedia & Mortiverse screenshot"/>
            <div className="about">
                <b>Rickipedia & Mortiverse</b> is a full-stack web application created with a MERN stack (MongoDB, Express, React, Node). Casual users can browse character, episode, and location information from the tv show <b>Rick & Morty</b>. Registered users can post and discuss theories about the show.<br></br>
                <a className="cube-link" href="https://rickipedia.herokuapp.com/" target="_blank" rel="noreferrer">visit site</a><br></br>
                GitHub repo: <a className="cube-link" href="https://github.com/Blake-D/Rickipedia" target="_blank" rel="noreferrer">Front End</a> | <a className="cube-link" href="https://github.com/Blake-D/Mortiverse" target="_blank" rel="noreferrer">Back End</a>
            </div>
        </div>
    )
}

export default Rickipedia