import React from 'react'
import './about.css'

// Import the Images =====================
import img1 from '../../Assets/customer.png'
import img2 from '../../Assets/maountain.png'
import img3 from '../../Assets/climbing.png'

// Import the Video Images =====================
import video from '../../Assets/video.mp4'

const About = () => {

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            </p>
          </div>

          <div className="singleItem">
            <img src={img1} alt="Image Name" />
            <h3>2000+ Customer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quo?
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful House experience nin there!</h2>
              <p>The Advantage subranking is based on an equally weighted average of scrores from five country.</p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About