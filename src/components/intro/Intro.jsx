import "./intro.scss";

export default function Intro() {
  return (

    <div className="intro" id="intro">

      <div className="right">
        <div className="wrapper">

          <div className="texto">
            <h2>Hi There, I'm</h2>
            <h1>Carlos Edu</h1>
            <p>I'm an 19 years old Brazilian, have studied illustration and pixel art since 2019.
              Today, I am a character designer, cartoonist, and pixel artist, working in animating sprites for 2D pixel games.</p>
            <h3>Pixel Artist / Illustrator / Animator / Character Designer</h3>
            <div className="icones-redes">
              <a href="https://twitter.com/4piih" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" /></svg></a>
              <a href="https://www.facebook.com/4Piih/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" /></svg></a>
              <a href="https://www.instagram.com/4piih/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg></a>
              <a href="https://www.twitch.tv/4piih" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" fill="#fff" height="50px"><path d="M 5.3632812 2 L 2 6.6367188 L 2 20 L 7 20 L 7 23 L 10 23 L 13 20 L 17 20 L 22 15 L 22 2 L 5.3632812 2 z M 6 4 L 20 4 L 20 13 L 17 16 L 12 16 L 9 19 L 9 16 L 6 16 L 6 4 z M 11 7 L 11 12 L 13 12 L 13 7 L 11 7 z M 16 7 L 16 12 L 18 12 L 18 7 L 16 7 z" /></svg></a>
            </div>
            <a className="area-arrow" href="#portfolio">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 25">
                <path className="arrow" id="Polígono_8" data-name="Polígono 8" d="M22.172,2.828a4,4,0,0,1,5.657,0L43.172,18.172A4,4,0,0,1,40.343,25H9.657a4,4,0,0,1-2.828-6.828Z" fill="#f0f0f0" />
              </svg>

            </a>
          </div>
          <div className="naosei">
            <img className="avatar" src="./assets/avatar.png" alt="pixel arte" />
          </div>


        </div>

      </div>
    </div>
  );
}
