import './intro.scss';


const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="left">
         <div className="imgContainer">
          <img src="assets/main-image1.jpeg" alt="" />
         </div>
      </div>
      <div className="right">
           <div className="wrapperRight">
            <h2> Hi There ,I'm</h2>
            <h1> Nazreen Siddique</h1>
            <h3>Frontend<span > Developer</span></h3>
           </div>
           <a href="#portfolio" className='arrow-icon'>
          <img src='./assets/arrowDown.png' alt="arrow" />
           </a>
      </div>
    </div>
  )
}

export default Intro