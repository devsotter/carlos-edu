import React, { useState } from "react";
import Modal from "react-modal";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

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
      job: ["./assets/work-1.gif", "/assets/work-2.gif", "/assets/work-3.gif", "/assets/work-4.gif"],
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
      job: ["./assets/work2-1.gif", "./assets/work2-2.gif", "./assets/work2-3.gif", "./assets/work2-4.gif", "./assets/work2-5.gif", "./assets/work2-6.gif", "./assets/work2-7.gif", "./assets/work2-8.jpg",],
      img: "./assets/job2.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const openModal = (images) => {
    setSelectedImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImages([]);
  };

  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d, index) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <a href={d.link} target="_blank">
                      <img src={d.icon} alt="icone de rede social" />
                    </a>
                    <a href={d.link2} target="_blank">
                      <img src={d.icon2} alt="icone de rede social" />
                    </a>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a className="link-more" onClick={() => openModal(d.job)}>
                    See more<span className="seta">→</span>
                  </a>
                </div>
              </div>
              <div className="right">

                <img src={d.img} alt="capa de jogo" />
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal"
              className="modal"
            >
              <div className="modal-content">
                <button className="modal-close-btn" onClick={closeModal}>
                  Close
                </button>
                {selectedImages.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>
            </Modal>
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
  );
}
