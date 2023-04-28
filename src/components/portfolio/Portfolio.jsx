import PortfolioList from '../PortfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import { featuredPortfolio, htmlcssPortfolio, vanillaJsPortfolio, ReactPortfolio } from '../../data'

const Portfolio = () => {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  const list = [
    {
      id: 'featured',
      title: 'FEATURED'
    },
    {
      id: 'html-css',
      title: 'HTML CSS'
    },
    {
      id: 'vanillaJs',
      title: 'VANILLA JS'
    },
    {
      id: 'react',
      title: 'REACT'
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "html-css":
        setData(htmlcssPortfolio);
        break;
      case "vanillaJs":
        setData(vanillaJsPortfolio);
        break;
      case "react":
        setData(ReactPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  }, [selected])
  return (
    <div className='portfolio'
      id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList title={item.title} key={item.id}
              id={item.id}
              setSelected={setSelected}
              active={selected === item.id}
            />
          )
        })}
      </ul>
      <div className="container">
        {data.map((d, index) => {
          return (
            <div className="item1" key={index}>
              <img src={d.img} alt="project" />
              <h4 className='itemTitle'>{d.title}</h4>
              <a href={d.source} target='_blank' rel="noreferrer"
               className='a1' d>Source Code</a>

              <a href={d.live} target='_blank'
                className='a2' rel="noreferrer">Live</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio