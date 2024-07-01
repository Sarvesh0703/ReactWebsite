import React from 'react'
import './footer.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className='logo flex'>
              <h1 className="flex"><MdOutlineTravelExplore className='icon' /> Dot</h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>

        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Blog</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Travel & Conditions</a></li>
          <li><a href="#">Privacy</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+91 000 000 000</span>
          <span className="email">istraveling@gmail.com</span>
        </div>

      </div>
      <div className="footerBottom">
        <p className="copyright">&copy; 2024 <a href="#">Mawai Infotech Ltd. | All rights reseved.</a></p>
      </div>

    </div>
  )
}

export default Footer
