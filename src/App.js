import './App.css'
import Portrait from './images/portrait.jpg'
import Resume from './Blake_DeGraw_resume.pdf'

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="first-name">
        <p>Blake</p>
      </div>
      <div className="last-name">
        <p>DeGraw</p>
      </div>
      <div id="blurb">
        <p><span id="fade-in-one">software engineer</span> | <span id="fade-in-two">game developer</span> | <span id="fade-in-three">audio artist</span></p>
      </div>
      <div id="ribbon"></div>
      <div id="about-container">
        <div id="left">
          <img id="portrait" src={Portrait}></img>
        </div>
        <div id="right">
          <div id="about-me">
          I am a full-stack web developer with a passion for crafting unique user experiences. As an engineer, video game developer, and critically-acclaimed composer, my works challenge the user to interact with devices in unorthodox ways.
          <br></br>
          <a href={Resume} download target="_blank">resume</a> | <a href="https://www.linkedin.com/in/blake-degraw/"  target="_blank">linkedIn</a> | <a href="https://github.com/Blake-D"  target="_blank">GitHub</a> | <a href="mailto:bbdegraw@gmail.com" target="_blank">bbdegraw@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App