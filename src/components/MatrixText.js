import React from 'react'

function MatrixText() {
    return (
        <div className="cube-div">
            <div className="about">
                <b>12-Tone Matrix Player</b> is an online tool for writing <a href="https://en.wikipedia.org/wiki/Twelve-tone_technique" target="_blank" rel="noreferrer">12-tone</a> music. The user inputs a series of 12 musical pitches, and the application calculates and displays all possible transpositions, inversions, retrogrades, and retrograded inversions of the original series. The user can also listen to audio renderings of select versions of the series they input.<br></br>
                <a className="cube-link" href="https://blake-d.github.io/12-tone-matrix-player/" target="_blank" rel="noreferrer">launch app</a><br></br>
                <a className="cube-link" href="https://github.com/Blake-D/12-tone-matrix-player" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
        </div>
    )
}

export default MatrixText