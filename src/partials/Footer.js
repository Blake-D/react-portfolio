import React from 'react'
import LinkedIn from '../images/linkedin_icon.png'
import GitHub from '../images/github_icon.png'

function Footer(){
    return(
        <div id="footer">
            <div id="link-icons">
            <div id="icon-left">
              <a href="https://www.linkedin.com/in/blake-degraw/" target="_blank" rel="noreferrer"><img className="icon" src={LinkedIn} alt="linkedIn icon" /></a>
            </div>
            <div id="icon-right">
              <a href="https://github.com/Blake-D" target="_blank" rel="noreferrer"><img className="icon" src={GitHub} alt="GitHub icon" /></a>
            </div>
          </div>
        </div>
    )
}

export default Footer