import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, EffectCube, Controller } from 'swiper'
import './App.css'
import 'swiper/swiper-bundle.css'
import Oscillator from './components/Oscillator'
import OscText from './components/OscText'
import OscMobile from './components/OscMobile'
import Rickipedia from './components/Rickipedia'
import RickText from './components/RickText'
import RickMobile from './components/RickMobile'
import Showdown from './components/Showdown'
import ShowdownText from './components/ShowdownText'
import ShowdownMobile from './components/ShowdownMobile'
import Matrix from './components/Matrix'
import MatrixText from './components/MatrixText'
import MatrixMobile from './components/MatrixMobile'
import Prodrome from './components/Prodrome'
import ProText from './components/ProText'
import ProMobile from './components/ProMobile'
import Escape from './components/Escape'
import EscapeText from './components/EscapeText'
import EscapeMobile from './components/EscapeMobile'
import BioPlunge from './components/BioPlunge'
import BioText from './components/BioText'
import BioMobile from './components/BioMobile'
import Portrait from './images/portrait.jpg'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'

SwiperCore.use([Navigation, EffectCube, Controller])

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)
  const [thirdSwiper, setThirdSwiper] = useState(null)
  const [fourthSwiper, setFourthSwiper] = useState(null)

  const appPics = []
  const appPicViews = [<Oscillator />, <Rickipedia />, <Showdown />, <Matrix />]
  for (let i = 0; i < 4; i++) {
    appPics.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {appPicViews[i]}
      </SwiperSlide>
    )
  }

  const appTexts = []
  const appTextViews = [<OscText />, <RickText />, <ShowdownText />, <MatrixText />]
  for (let i = 0; i < 4; i++) {
    appTexts.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {appTextViews[i]}
      </SwiperSlide>
    )
  }

  const appMobiles = []
  const appMobileViews = [<OscMobile />, <RickMobile />, <ShowdownMobile />, <MatrixMobile />]
  for (let i = 0; i < 4; i++) {
    appMobiles.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {appMobileViews[i]}
      </SwiperSlide>
    )
  }

  const gamePics = []
  const gamePicViews = [<Prodrome />, <Escape />, <BioPlunge />]
  for (let i = 0; i < 3; i++) {
    gamePics.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {gamePicViews[i]}
      </SwiperSlide>
    )
  }

  const gameTexts = []
  const gameTextViews = [<ProText />, <EscapeText />, <BioText />]
  for (let i = 0; i < 3; i++) {
    gameTexts.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {gameTextViews[i]}
      </SwiperSlide>
    )
  }

  const gameMobiles = []
  const gameMobileViews = [<ProMobile />, <EscapeMobile />, <BioMobile />]
  for (let i = 0; i < 3; i++) {
    gameMobiles.push(
      <SwiperSlide className="slider" key={`slide-${i}`}>
        {gameMobileViews[i]}
      </SwiperSlide>
    )
  }

  return (
    <div id="body">
      <Header />
      <HeaderMobile />
      <div className="first-name">
        <p>Blake</p>
      </div>
      <div className="last-name">
        <p>DeGraw</p>
      </div>
      <div id="blurb">
        <p><span id="fade-in-one">software engineer | </span> <span id="fade-in-two">game developer | </span> <span id="fade-in-three">audio artist</span></p>
      </div>
      <div id="ribbon"></div>
      <div id="about-container">
        <div id="left">
          <img id="portrait" src={Portrait} alt="portrait of Blake"></img><br></br>
        </div>
        <div id="right">
          <div id="about-me">
            I am a full-stack web developer with a passion for crafting unique user experiences. As an engineer, video game developer, and critically-acclaimed composer, my works challenge the user to interact with devices in unorthodox ways.
          <br></br><br></br>
          </div>
          <br></br>
          <div id="tech-stacks">
            JavaScript <b>|</b> Python <b>|</b> PHP <b>|</b> HTML <b>|</b> CSS <br></br>
            React <b>|</b> Next <b>|</b> Node <b>|</b> Express <b>|</b> EJS <b>|</b> Flask <br></br>
            SQL <b>|</b> PostgreSQL <b>|</b> Sequelize <b>|</b> MongoDB <b>|</b> Mongoose <b>|</b> Atlas <br></br>
          </div>
        </div>
      </div>
      <div id="cube-1" className="prime-cube">
        <p className="cube-title">Apps</p>
        <React.Fragment>
          <Swiper
            id="main"
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            navigation
            effect="cube"
            spaceBetween={0}
            slidesPerView={1}>
            {appPics}
          </Swiper>
          <Swiper
            id="main-2"
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            spaceBetween={0}
            slidesPerView={1}>
            {appTexts}
          </Swiper>
        </React.Fragment>
      </div>
      <div id="cube-1" className="alt-cube">
        <p className="cube-title">Apps</p>
        <React.Fragment>
          <Swiper
            id="main"
            // onSwiper={setFirstSwiper}
            // controller={{ control: secondSwiper }}
            navigation
            effect="cube"
            spaceBetween={0}
            slidesPerView={1}>
            {appMobiles}
          </Swiper>
        </React.Fragment>
      </div>
      <div id="cube-2" className="prime-cube">
        <p className="cube-title">Video Games</p>
        <React.Fragment>
          <Swiper id="main"
            onSwiper={setThirdSwiper}
            controller={{ control: fourthSwiper }}
            navigation
            effect="cube"
            spaceBetween={0}
            slidesPerView={1}>
            {gamePics}
          </Swiper>
          <Swiper
            id="main-2"
            onSwiper={setFourthSwiper}
            controller={{ control: thirdSwiper }}
            spaceBetween={0}
            slidesPerView={1}>
            {gameTexts}
          </Swiper>
        </React.Fragment>
      </div>
      <div id="cube-2" className="alt-cube">
        <p className="cube-title">Video Games</p>
        <React.Fragment>
          <Swiper id="main"
            // onSwiper={setThirdSwiper}
            // controller={{ control: fourthSwiper }}
            navigation
            effect="cube"
            spaceBetween={0}
            slidesPerView={1}>
            {gameMobiles}
          </Swiper>
        </React.Fragment>
      </div>
    </div>
  )
}

export default App