import SocialIcon from "./components/SocialIcon";
import Button from "./components/PrimaryButton";
import ImgGallery from "./components/ImgGallery";
import { gsap } from 'gsap';
import { useEffect } from "react";

import "./App.css";


function App() {

  const whitelistAnimation = () => {
    setTimeout(() => {
      const whitelist = document.getElementById('whitelist-flash');
      whitelist.style.visibility = 'visible';
    }, 2500)
    gsap.fromTo("#whitelist-flash", {opacity: 0}, {opacity:1, duration: 1, x: 0, delay: 2.5})
    gsap.fromTo("#whitelist-flash", {opacity: 1}, {opacity:0, duration: 1, x: 0, delay: 6});
  }

  const playAudio = (e) => {
    const id = e.target.dataset.audioid;
    const audio = document.getElementById(id);
    const audioButtons = document.querySelectorAll(`.pause`)
    audioButtons.forEach(button => button.click());
    audio.play()

    
    document.querySelectorAll(`.play[data-audioid="${id}"]`)[0].classList.add('hidden');
    document.querySelectorAll(`.pause[data-audioid="${id}"]`)[0].classList.remove('hidden');
  }

  const pauseAudio = (e) => {
    const id = e.target.dataset.audioid;
    const audio = document.getElementById(id);
    audio.pause()

    document.querySelectorAll(`.play[data-audioid="${id}"]`)[0].classList.remove('hidden');
    document.querySelectorAll(`.pause[data-audioid="${id}"]`)[0].classList.add('hidden');
  }

  useEffect(() => {
    whitelistAnimation();
  }, [])
  
  return (
    <div>
      <header>
        <div className="logo-container">
          <p>blocktunes</p>
        </div>
        <div className="contact-container">
          <SocialIcon link={"https://www.instagram.com/blocktunesnft/?hl=en"} imgSrc={require("./images/instagram.svg").default} />
          <SocialIcon link={"https://twitter.com/blocktunesnft"} imgSrc={require("./images/twitter.svg").default} />
          <Button label='Connect Wallet' />
        </div>
      </header>
      <main>
        <section className="splash">
          <div className="overlay">
            <h1>the soundtrack for web3</h1>
            <Button label='Mint Track'/>
            <p id="whitelist-flash">the mintlist has begun</p>
          </div>
        </section>
        <section className="overview one">
          <div className="overlay">
          
          <p class="primary">the most extensive music NFT to date ⚡</p>

          <p class="secondary">...and a new model for quality music that can reward everyone involved</p>

          <p class="primary">blocktunes will be formed of musical “building blocks” - instrumentals, vocals, drums etc, that can be pulled together by bespoke music logic to create a limited collection of unique tracks</p>
         </div>
        </section>
        <section class="examples">
            <h2>example blocks</h2>
            <div class="audio">
              <audio id="audio-1" controls class="hidden" src={require('./music/1.mp3')}>
              </audio>
              <audio id="audio-2" controls class="hidden" src={require("./music/2.mp3")}>
              </audio>
              <audio id="audio-3" controls class="hidden" src={require("./music/3.mp3")}>
              </audio>            
              <audio id="audio-4" controls class="hidden" src={require("./music/4.mp3")}>
              </audio>            
              <img onClick={playAudio} data-audioid="audio-1" src={require('./images/play_green.svg').default} className="play" alt="play"/>
              <img onClick={pauseAudio} data-audioid="audio-1" src={require('./images/pause_green.svg').default} className="pause hidden" alt="pause"/>
              <img onClick={playAudio} data-audioid="audio-2" src={require('./images/play_purple.svg').default} className="play" alt="play"/>
              <img onClick={pauseAudio} data-audioid="audio-2" src={require('./images/pause_purple.svg').default} className="pause hidden" alt="pause"/>
              <img onClick={playAudio} data-audioid="audio-3" src={require('./images/play_orange.svg').default} className="play" alt="play"/>
              <img onClick={pauseAudio} data-audioid="audio-3" src={require('./images/pause_orange.svg').default}className="pause hidden"  alt="pause"/>
              <img onClick={playAudio} data-audioid="audio-4" src={require('./images/play_blue.svg').default} className="play" alt="play"/>
              <img onClick={pauseAudio} data-audioid="audio-4" src={require('./images/pause_blue.svg').default}className="pause hidden"  alt="pause"/>
            </div>
        </section>
        <section className="overview two">
          <div className="overlay">
          <p class="primary">over thirty top musicians are busy in the studio recording and composing vocals and instrumentals: the musical "traits" from which buyers can mint their very own unique blocktune 🎧</p>

          <p class="secondary">this will be the most extensive music NFT to date... so let’s set a precedent and write some history 😎</p>
          </div>
        </section>
        <section className="contributors-gallery">
          <div class="overlay">
          </div>
          <ImgGallery />
        </section>  
      </main>
      <footer>
        <p>blocktunes</p>
      </footer>
    </div>
  );
}

export default App;
