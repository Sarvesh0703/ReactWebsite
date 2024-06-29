import React, {useEffect} from 'react'
import './offer.css'
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

// Import the Images =====================
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'


const Offers = [
  {
    id: 1,
    imgSrc: img4,
    stTdeitle: 'Machu Picchu',
    location: 'Peru',
    price: '$57, 432',
  },

  {
    id: 2,
    imgSrc: img5,
    stTdeitle: 'Guanajuato',
    location: 'Maxico',
    price: '$2,400',
  },

  {
    id: 3,
    imgSrc: img6,
    stTdeitle: 'Angkor Wat',
    location: 'Combodia',
    price: '4,500',
  },
]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special Offer
          </h2>
          <p>From Historical circles to natural specteculars, come see the best of the world!</p>
        </div>

        <div className="mainContent grid">
          {
            Offers.map(({id, imgSrc, stTdeitle, location, price}) => {
              return (
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={stTdeitle} />
                    <span className='discount'>30% Off</span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>Wi-Fi</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>{location}</small>
                    </div>

                    <button className="btn flex">View Details <BsArrowRightShort className="icon" /></button>
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

export default Offer