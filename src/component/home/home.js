import React from 'react'
import "../home/home.css"
import Image from '../home/image/ashish4.png'

const Home = () => {
  return (
    <>
        <section className='home'>
            <div className='content'>
                <h3 >Next generation <span>Digital Banking</span></h3>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop  for spending, saving, budgeting, investing, and much more.</p>
                <button className='btn'>Request Invite</button>
            </div>
            <div className='image'>
                <img src={Image} alt='me' widht="200"/>
            </div>
      
        </section>
    </>
  )
}

export default Home
