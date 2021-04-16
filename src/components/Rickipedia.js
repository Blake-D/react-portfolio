import React from 'react'
import RickPic from '../images/rickipedia_home.png'

function Rickipedia(){
    return(
        <div className="cube-div">
            <h1 id="schwifty">Rickipedia & Mortiverse</h1>
            <img className="screenshot" src={RickPic} alt="Rickipedia & Mortiverse screenshot"/>
        </div>
    )
}

export default Rickipedia