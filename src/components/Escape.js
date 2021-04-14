import React from 'react'
import EscapePic from '../images/escape_screenshot.png'

function Escape(){
    return(
        <div className="cube-div">
            <h1>Escape from D-1471</h1>
            <img className="screenshot" src={EscapePic} alt="Escape from D-1471 screenshot"/>
            <div className="about">
                <b class="eurostile">Escape from D-1471</b> is a first-person shooter/platformer made in <b>Unreal Engine 4</b>. The player must escape from a futuristic floating prison complex through a series of low-gravity freefalls from one platform to another. Built out of love for challenging games, it is designed to be as punishing as possible. If that kind of experience is up your alley, please <a href="mailto:bbdegraw@gmail.com" target="_blank" rel="noreferrer">let me know</a>! <em>Escape</em> is currently in testable Beta.
            </div>
        </div>
    )
}

export default Escape