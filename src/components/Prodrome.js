import React from 'react'
import Propic from '../images/prodrome_screenshot.jpg'

function Prodrome(){
    return(
        <div className="cube-div">
            <h1>Prodrome</h1>
            <img className="screenshot" src={Propic} alt="Prodrome screenshot"/>
            <div className="about">
                <b class="eurostile">Prodrome</b> is a first-person horror/puzzle game made in <b>Unreal Engine 4</b>. You play as a nurse in a small mountain community where a mysterious portal has appeared and trapped the townspeople in a time loop from which there is no apparent escape. It is currently in the final stages of development. Please <a href="mailto:bbdegraw@gmail.com" target="_blank" rel="noreferrer">contact me</a> if you are interested in Beta testing.
            </div>
        </div>
    )
}

export default Prodrome