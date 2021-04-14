import React from 'react'
import RickPic from '../images/rickipedia_home.png'

function Rickipedia(){
    return(
        <div className="cube-div">
            <h1>Rickipedia & Mortiverse</h1>
            <img className="screenshot" src={RickPic} alt="Rickipedia & Mortiverse screenshot"/>
            <div className="about">
                <b id="schwifty"><a href="https://rickipedia.herokuapp.com/" target="_blank" rel="noreferrer">Rickipedia & Mortiverse</a></b> is a full-stack web application created with a MERN stack (MongoDB, Express, React, Node). Casual users can browse character, episode, and location information from the tv show <b>Rick & Morty</b>. Registered users can post and discuss theories about the show.
            </div>
        </div>
    )
}

export default Rickipedia