import React from 'react'
import './styles/Home.css';
import { Parallax } from 'react-parallax';
import { TbTruck } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import service from "../media/service2.png"

import BgVideo from '../media/BRoll.mp4';
import maple from '../media/maple.jpg'
import FooterBottom from '../Footer';
import AutoHeading from '../AutoHeading';


const Home = () => {
  return (
    <>
    <div className='main-container'>

        <div className="text-white bg-cover bg-center pt-20 sm:pt-80 pb-36">
          <video src={BgVideo} autoPlay muted loop className="video-bg"/>
          <h1 className=' text-3xl max-w-[25rem] mx-auto sm:max-w-[60rem] font-medium sm:text-5xl text-white text-center index'>
            <AutoHeading
              text={'Bhook Lagi ! One Place solution to satisfy your hunger'}
              speed={100}
              wait_time={750}
            />
          </h1>
          <p className='text-center text-lg mx-auto max-w-[30rem] sm:text-xl sm:max-w-[70rem] my-10 index'>
            subheading
          </p>
          <div className='flex mt-20' index>
            <button>button-text</button>
          </div>
        </div>

        <div className='benefitsContainer'>
          <div className=' benefit ben1'>
            <div className='benImage'><TbTruck size='50' color='black' /></div>
            <div className='benefitContent1'>
              <h3 className='benefit-heading'>Fast Delivery</h3>
              <p className='benContent'>lorem lorem ipsum hello ok ok</p>
            </div>
          </div>
          <div className=' benefit ben2'>
            <div className='benImage'><GiMeal  size='50' color='black'/></div>
            <div className='benefitContent1'>
              <h3 className='benefit-heading'>Quality Food</h3>
              <p className='benContent'>lorem lorem ipsum hello ok ok</p>
            </div>
          </div>
          <div className=' benefit ben3'>
            <div className='benImage'><RiCustomerService2Line  size='50' color='black'/></div>
            <div className='benefitContent1'>
              <h3 className='benefit-heading'>Cutomer Support</h3>
              <p className='benContent'>lorem lorem ipsum hello ok ok</p>
            </div>
          </div>
        </div>

        <div>
          <Parallax bgImage={maple} strength={400}>
            <div style={{ height: 500 }}>
          {/* Content to apply parallax effect to */}
            </div>
          </Parallax>
        </div>

        <div className='offers'>
          <img src={service} className='service'/>
        </div>

        <div className='offers'>
          {/* Remove this after adding footer */}
        </div>
      <FooterBottom/>
      </div>
      
    </>
  )
}

export default Home;