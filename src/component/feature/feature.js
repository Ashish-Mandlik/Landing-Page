import React from 'react'
import "./feature.css"
import Img1 from "../feature/image/icon-online.png"
import Img2 from "../feature/image/icon-budgeting.png"
import Img3 from "./image/icon-onboarding.png"
import Img4 from "./image/icon-api.png"
const Feature = () => {
  return (
    <div className='feature'>
      <h1 className='heading'>Why choose <span>Easybank?</span></h1>
      <p className='sub-heading'> We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      <div className='box-container'>
        
        <div className='box'>
          <img src={Img1} alt='Online Banking' />
          <h3>Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>

        <div className='box'>
          <img src={Img2} alt='Simple Budgeting' />
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
        </div>

        <div className='box'>
          <img src={Img3} alt='Fast Onboarding' />
          <h3>Fast Onboarding</h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>

        <div className='box'>
          <img src={Img4} alt='Open API' />
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>

      </div> 
      
    </div>
  )
}

export default Feature
