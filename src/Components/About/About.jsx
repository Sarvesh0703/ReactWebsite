import React, {useEffect} from 'react'
import './about.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Import the Images =====================
import img1 from '../../Assets/customer.png'
import img2 from '../../Assets/maountain.png'
import img3 from '../../Assets/climbing.png'

// Import the Video Images =====================
import video from '../../Assets/video.mp4'

const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img1} alt="Image Name" />
            <h3>2000+ Customer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>Wonderful House experience nin there!</h2>
              <p>The Advantage subranking is based on an equally weighted average of scrores from five country.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted type="video.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About