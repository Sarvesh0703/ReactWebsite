import React, {useEffect} from 'react'
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

// Import the Images =====================
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import img14 from '../../Assets/img14.jpg'


const Posts = [
  {
    id: 1,
    postImage: img10,
    title: 'Beautyful Morocco, let us travel',
    desc: 'The kingdom on the Morocco is a country in western Morth Africa, with coastines on the Atlantic Ocean.',
  },

  {
    id: 2, postImage: img11,
    title: 'Beautyful Morocco, let us travel',
    desc: 'Travel as a journey from one place to another far off, distant and a different place.',
  },

  {
    id: 3,
    postImage: img12,
    title: 'Beautyful Morocco, let us travel',
    desc: 'Traveling provides opportunities for personal growth, cultural immersion, adventure-seeking,relaxation, and escaping daily routines. ',
  },

  {
    id: 4,
    postImage: img14,
    title: 'Beautyful Morocco, let us travel',
    desc: 'The kingdom on the Morocco is a country in western Morth Africa, with coastines on the Atlantic Ocean',
  }
]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">An insight to the incredible experience in the world.</p>
        </div>

        <div className="mainContent grid">
          {
            Posts.map(({ id, postImage, title, desc }) => {
              return (
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt="{title}" />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                    <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                  </div>

                  <a data-aos="fade-up" data-aos-duration="4500" href="#" className='flex'>Read More <BsArrowRightShort className="icon" /></a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
