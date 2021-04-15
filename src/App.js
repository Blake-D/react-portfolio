// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Portrait from './images/portrait.jpg'
import Resume from './Blake_DeGraw_resume.pdf'
import LinkedIn from './images/linkedin_icon.png'
import GitHub from './images/github_icon.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCube } from 'swiper'
import './App.css'
import 'swiper/swiper-bundle.css'
import React from 'react'
import Oscillator from './components/Oscillator'
import Rickipedia from './components/Rickipedia'
import Showdown from './components/Showdown'
import Prodrome from './components/Prodrome'
import Escape from './components/Escape'
import BioPlunge from './components/BioPlunge'

SwiperCore.use([Navigation, Pagination, EffectCube])

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const slides1 = []
  const slideViews1 = [<Oscillator/>, <Rickipedia/>, <Showdown/>]
  for (let i = 0; i < 3; i++){
    slides1.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {slideViews1[i]}
      </SwiperSlide>
    )
  }

  const slides2 = []
  const slideViews2 = [<Prodrome/>, <Escape/>, <BioPlunge/>]
  for (let i = 0; i < 3; i++){
    slides2.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {slideViews2[i]}
      </SwiperSlide>
    )
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
          <img id="portrait" src={Portrait} alt="portrait of Blake"></img><br></br>
          <div id="link-icons">
            <div id="icon-left">
              <a href="https://www.linkedin.com/in/blake-degraw/" target="_blank" rel="noreferrer"><img className="icon" src={LinkedIn} alt="linkedIn icon" /></a>
            </div>
            <div id="icon-right">
              <a href="https://github.com/Blake-D" target="_blank" rel="noreferrer"><img className="icon" src={GitHub} alt="GitHub icon" /></a>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="about-me">
            I am a full-stack web developer with a passion for crafting unique user experiences. As an engineer, video game developer, and critically-acclaimed composer, my works challenge the user to interact with devices in unorthodox ways.
          <br></br><br></br>
            <a href={Resume} target="_blank" rel="noreferrer">resume</a> |  <a href="mailto:bbdegraw@gmail.com" target="_blank" rel="noreferrer">bbdegraw@gmail.com</a>
          </div>
          <br></br>
          <div id="tech-stacks">
            JavaScript <b>|</b> ES6 <br></br>
            HTML5 <b>|</b> CSS <b>|</b> Bootstrap <b>|</b> Responsive Web Design <br></br>
            React <b>|</b> Next <b>|</b> Node <b>|</b> Express <b>|</b> EJS <b>|</b> RESTful Routing <br></br>
            Python <b>|</b> Flask <br></br>
            SQL <b>|</b> PostgreSQL <b>|</b> Sequelize <b>|</b> MongoDB <b>|</b> Mongoose <b>|</b> Atlas
          </div>
        </div>
      </div>
      <div id="cube-1">
        <p><b className="cube-title">Apps</b></p>
        <React.Fragment>
          <Swiper id="main"
            navigation
            pagination
            effect="cube"
            // loop={true}
            spaceBetween={0}
            slidesPerView={1}>
            {slides1}
          </Swiper>
        </React.Fragment>
      </div>
      <div id="cube-2">
        <p><b className="cube-title">Video Games</b></p>
        <React.Fragment>
          <Swiper id="main"
            navigation
            pagination
            effect="cube"
            // loop={true}
            spaceBetween={0}
            slidesPerView={1}>
            {slides2}
          </Swiper>
        </React.Fragment>
      </div>
    </>
  )
}

export default App