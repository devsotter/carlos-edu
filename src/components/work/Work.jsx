import React, { useState } from "react";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentWork, setCurrentWork] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/steam.svg",
      link: "https://store.steampowered.com/app/1599860/Vanaris_Tactics/",
      link2: "https://twitter.com/VanarisTactics",
      icon2: "./assets/twitter.svg",
      title: "Vanaris Tactics",
      more: "Job1",
      desc: "I made some characters and power ups for Vanaris Tactics in 2021.",
      job: [
        "./assets/work-1.gif",
        "/assets/work-2.gif",
        "/assets/work-3.gif",
        "/assets/work-4.gif",
      ],
      img: "./assets/job1.jpg",
    },
    {
      id: "2",
      icon: "./assets/steam.svg",
      link: "",
      link2: "",
      more: "",
      icon2: "./assets/twitter.svg",
      title: "Pesadelum",
      desc: "I made some pixelated animated characters in 2022 to early 2023 for Pesadelum",
      job: [
        "./assets/work2-1.gif",
        "./assets/work2-2.gif",
        "./assets/work2-3.gif",
        "./assets/work2-4.gif",
        "./assets/work2-5.gif",
        "./assets/work2-6.gif",
        "./assets/work2-7.gif",
        "./assets/work2-8.jpg",
      ],
      img: "./assets/job2.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : data.length - 1))
      : setCurrentSlide((prevSlide) => (prevSlide < data.length - 1 ? prevSlide + 1 : 0));
  };

  const openModal = (work) => {
    setCurrentWork(work);
    setCurrentImage(0); 
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage < currentWork.job.length - 1 ? prevImage + 1 : 0
    );
  };

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : currentWork.job.length - 1
    );
  };

  return (
    <div className="works" id="works">
       <h1>Works</h1>
      <div className="container-work">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map((d) => (
            <div className="container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <a href={d.link} target="_blank" rel="noopener noreferrer">
                        <img src={d.icon} alt="icone de rede social" />
                      </a>
                      <a href={d.link2} target="_blank" rel="noopener noreferrer">
                        <img src={d.icon2} alt="icone de rede social" />
                      </a>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    {d.job.length > 0 && (
                      <a className="link-more" onClick={() => openModal(d)}>
                        See more<span className="seta">→</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="capa de jogo" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt="seta para esquerda"
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt="seta para direita"
          onClick={() => handleClick()}
        />
      </div>
      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <img src={currentWork.job[currentImage]} alt="imagem do trabalho" />
          </div>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <div className="modal-controls">
            <button className="prev-button" onClick={previousImage}>
            <img src="./assets/arrow.png" alt="svg seta para direita" />
            </button>
            <button className="next-button" onClick={nextImage}>
            <img src="./assets/arrow.png" alt="svg seta para direita" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
