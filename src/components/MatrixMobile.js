import React from 'react'
import MatrixPic from '../images/matrix_screenshot.png'

function MatrixMobile() {
    return (
        <div className="cube-div">
            <h1>12-Tone Matrix Player</h1>
            <img className="screenshot" src={MatrixPic} alt="12-Tone Matrix Player screenshot" />
            <div className="about">
                <b>12-Tone Matrix Player</b> is an online tool for writing <a class="cube-link" href="https://en.wikipedia.org/wiki/Twelve-tone_technique" target="_blank" rel="noreferrer">12-tone</a> music. The user inputs a series of 12 musical pitches, and the application calculates and displays all possible transpositions, inversions, retrogrades, and retrograded inversions of the original series. The user can also listen to audio renderings of select versions of the series.<br></br>
                <a className="cube-link" href="https://blake-d.github.io/12-tone-matrix-player/" target="_blank" rel="noreferrer">launch app</a><br></br>
                <a className="cube-link" href="https://github.com/Blake-D/12-tone-matrix-player" target="_blank" rel="noreferrer">GitHub repo</a><br></br><br></br>
            </div>
        </div>
    )
}

export default MatrixMobile