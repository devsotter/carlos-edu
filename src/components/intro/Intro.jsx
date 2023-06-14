import "./intro.scss";
import { ArrowDropDown, Twitter, Facebook, Instagram } from "@material-ui/icons";


export default function Intro() {
  return (

    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
       <div className="texto">
       <h2>Hi There, I'm</h2>
          <h1>Carlos Edu</h1>
      <p>I'm an 19 years old Brazilian, have studied illustration and pixel art since 2019.
Today, I am a character designer, cartoonist, and pixel artist, working in animating sprites for 2D pixel games.</p>
<h3>Pixel Artist / Illustrator / Animator / Character Designer</h3>
<div className="icones-redes">
<a href="https://twitter.com/4piih" target="_blank"><Twitter/></a>
<a href="https://www.facebook.com/4Piih/" target="_blank"><Facebook/></a>
<a href="https://www.instagram.com/4piih/" target="_blank"><Instagram/></a>
<a href="https://www.twitch.tv/4piih" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" fill="#fff" height="24px"><path d="M 5.3632812 2 L 2 6.6367188 L 2 20 L 7 20 L 7 23 L 10 23 L 13 20 L 17 20 L 22 15 L 22 2 L 5.3632812 2 z M 6 4 L 20 4 L 20 13 L 17 16 L 12 16 L 9 19 L 9 16 L 6 16 L 6 4 z M 11 7 L 11 12 L 13 12 L 13 7 L 11 7 z M 16 7 L 16 12 L 18 12 L 18 7 L 16 7 z"/></svg></a>
</div>
<a href="#portfolio">
         <ArrowDropDown className="arrow"/>
        </a>
       </div>
       <div className="naosei">
  <img className="avatar" src="./assets/avatar.png" alt="" />
  </div>

        </div>

      </div>
    </div>
  );
}
