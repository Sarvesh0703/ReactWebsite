import React from 'react'
import './popular.css'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// Import the Images =====================
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpeg'
import img7 from '../../Assets/img7.jpg'
import img9 from '../../Assets/img9.jpg'

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Famous Buildings',
    location: 'Delhi',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 2,
    imgSrc: img3,
    destTitle: 'Taj Mahal',
    location: 'Agara',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Combodia',
    location: 'Maxico',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Angkor Wat',
    location: 'Kerla',
    grade: 'CULTURAL RELAX',
  }
]

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <p>From Historical circles to natural specteculars, come see the best of the world!</p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeft className='icon leftIcon' />
            <BsArrowRight className='icon' />
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({ id, imgSrc, destTitle, location, grade }) => {
              return (
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="" />
                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>
                      <BsArrowRight className='icon' />
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>
                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className='icon' />
                        </span>
                        Dot
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Popular
