import React from 'react'
import './styles/Home.css';

const Home = () => {
  return (
    <>
    <div className='main-container'>
        <div className="bg-blue-400 text-white bg-cover bg-center pt-20 sm:pt-72 pb-36">
          <h1 className=' text-3xl max-w-[25rem] mx-auto sm:max-w-[60rem] font-medium sm:text-5xl text-white text-center'>Heading</h1>
          <p className='text-center text-lg mx-auto max-w-[30rem] sm:text-xl sm:max-w-[70rem] my-10'>
            subheading
          </p>
          <div className='flex mt-20'>
            <button>button-text</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home;