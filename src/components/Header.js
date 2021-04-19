import React from 'react'
import LinkedIn from '../images/linkedin_icon.png'
import GitHub from '../images/github_icon.png'
import Resume from '../Blake_DeGraw_resume.pdf'


function Header(){
    return(
        <div className="nav">
            <a href="https://www.linkedin.com/in/blake-degraw/" target="_blank" rel="noreferrer"><img className="icon" src={LinkedIn} alt="linkedIn icon" /></a> <a href="https://github.com/Blake-D" target="_blank" rel="noreferrer"><img className="icon" src={GitHub} alt="GitHub icon" /></a> <a href="#cube-1">apps</a> | <a href="#cube-2">games</a> | <a id="contact-info" href={Resume} target="_blank" rel="noreferrer">resume</a>
      </div>
    )
}

export default Header