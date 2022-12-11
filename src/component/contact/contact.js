import React from 'react'
import "../contact/contact.css"
import Img1 from "./image/logo.png"

import Img2 from "./image/icon-facebook.png"
import Img3 from "./image/icon-instagram.png"
import Img4 from "./image/icon-pinterest.png"
import Img5 from "./image/icon-twitter.png"
import Img6 from "./image/icon-youtube.png"


const Contact = () => {
  return (
    <>

        
        
        
        <div className='footer'>

            <div className='box-container'>

                <div className='box'>
                    <img src={Img1} alt='Logo' className='logo' />
                    <div className='social-link'>
                        <a href="#" ><img src={Img2} alt="facebook" className='Img1 position'/></a>
                        <a href="#" ><img src={Img3} alt="instagram"className='Img2 position'/></a>
                        <a href="#"><img src={Img4} alt="pinterest" className='Img3 position'/></a>
                        <a href="#"><img src={Img5} alt="teitter"className='Img4 position' /></a>
                        <a href="#"><img src={Img6} alt="youtube" className='Img5 position'/></a>
                    </div>
                </div> 

                <div className='box'>
                    <p><a href='#' className='link'>About Us</a></p>
                    <p><a href='#' className='link'>Contact</a></p>
                    <p><a href='#'className='link'>Blog</a></p>
                </div>

                <div className='box'>
                    <p><a href='#' className='link'>Career</a></p>
                    <p><a href='#' className='link'>Support</a></p>
                    <p><a href='#' className='link'>Privacy Policy</a></p>
                </div>

                <div className='box'>
                    
                    <p className=''>@EasyBank-Ashish.All Right Reserved</p>

                </div>

            </div>

        </div>
    </>
    
  )
}

export default Contact
