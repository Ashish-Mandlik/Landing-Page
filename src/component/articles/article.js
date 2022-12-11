import React from 'react'
import "../articles/article.css"

import Img1 from "./image/image-currency.jpg"
import Img2 from "./image/image-restaurant.jpg"
import Img3 from "./image/image-plane.jpg"
import Img4 from "./image/image-confetti.jpg"


const Article = () => {
  return (
    <>
        <div className='feature1'>
        <h1 className='heading1'><span>Latest Articles</span></h1>
        <div className='box-container'>
            <div className='box'>
                <img src={Img1} alt='Receive money in any currency with no fees' />
                <figcaption>-By Claire Robinson</figcaption>
                <h3>Receive money in any currency with no fees</h3>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </div>
            <div className='box'>
                <img src={Img2} alt='By Wilson Hutton' />
                <figcaption>-By Wilson Hutton</figcaption>
                <h3>Treat yourself without worrying about money</h3>
                <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
            </div>
            <div className='box'>
                <img src={Img3} alt='By Wilson Hutton' />
                <figcaption>-By Wilson Hutton</figcaption>
                <h3>Take your Easybank card wherever you go</h3>
                <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </div>
            <div className='box'>
                <img src={Img4} alt='By Claire Robinson' />
                <figcaption>-By Claire Robinson</figcaption>
                <h3>Our invite-only Beta accounts are now live!</h3>
                <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </div>
        </div>
      
        </div>
    </>
  )
}

export default Article
