import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/react.png",
      title: " E-commerce App",
      desc: 'Tech Stack : HTML, CSS, REACT',
      features: 'A simple E-commerce Website where products are fetch from API , cart transaction is carried out with the Stripe and Authentication is done using Auth0. ',
      img:
        "assets/react/e-commerce-react.png",
      source: 'https://github.com/nazreen-siddique/react-comfy-store',
      live: 'https://react-e-comfy-store.netlify.app/',
    },
    {
      id: "2",
      icon: "./assets/react.png",
      title: " Youtube React App",
      desc: 'Tech Stack : HTML, CSS, REACT',
      features: 'Youtube APP where videos are fetch from Rapid-API and user interaction is created using Material-ui.  ',
      img:
        "assets/react/youtube-react.png",
      source: 'https://github.com/nazreen-siddique/youtube-clone-react-project',
      live: 'https://youtube-clone-react-project.netlify.app/'
    },
    {
      id: "3",
      icon: "./assets/react.png",
      title: "Search github user App",
      desc: 'Tech Stack : HTML, CSS, REACT',
      features: 'Search Github user APP where data is fetch using Github-API and FushionCharts are used for Charts and Authentication is done by Auth0. ',
      img:
        "assets/react/github-user.png",
      source: 'https://github.com/nazreen-siddique/1-react_search_github_user',
      live: 'https://react-jobsters-project.netlify.app/landing'
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d,index) => (
          <div className="container" key={index}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" className="imgIcon" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <h6>{d.features}</h6>
                  <a href={d.source} alt=
                    'source' target="_blank" rel="noreferrer">Source </a>
                  <a href={d.live} alt=
                    'live' target="_blank" rel="noreferrer">Live </a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/rightArrow.png"
        className="arrow Aleft"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/rightArrow.png"
        className="arrow Rright"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}