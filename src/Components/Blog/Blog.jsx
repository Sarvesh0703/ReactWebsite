import React from 'react'
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";

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

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Blog?
          </h2>
          <p>An insight to the incredible experience in the world.</p>
        </div>

        <div className="mainContent grid">
          {
            Posts.map(({ id, postImage, title, desc }) => {
              return (
                <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt="{title}" />
                  </div>

                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <a href="#" className='flex'>Read More <BsArrowRightShort className="icon" /></a>
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
