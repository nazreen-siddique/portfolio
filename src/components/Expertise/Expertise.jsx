import './Expertise.scss';
import React from 'react'

const Expertise = () => {
  const data = [
    {
      id: 1,
      img :'assets/htmlsqaure.png'
    },
    {
      id:2 ,
      img: 'assets/javascript.png'
    },
    {
      id:4 ,
      img: 'assets/react-logo.svg'
    },
    {
      id: 3,
      img: 'assets/redux.png'
    },
    {
     id:5 ,
      img: 'assets/auth0.png'
    },
    {
     id:6 ,
      img: 'assets/firebase.png'
    },
  ]
  return (
    <div className='expertise' id='expertise'>
      <h1>Expertise</h1>
      <div className="box">
        {data.map((d, index) => {
          return (
            <div className="boxItem" key={index}>
              <img src={d.img} alt="project" className='expert' />
              <h4 className='itemTitle'>{d.title}</h4>
            
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Expertise