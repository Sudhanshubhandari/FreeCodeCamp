import React from 'react'
import Apple from '../../Images/apple.png'
import Google from '../../Images/Google.png'
import Microsoft from '../../Images/Microsoft.png'
import Amazon from '../../Images/Amazon.png'
import Spotify from '../../Images/Spotify.png'
const Home = () => {
  return (
<div className='flex justify-center flex-col items-center tc'>
    <div className=" h-full flex flex-col w-3/8  mt-28 ">
        <h1 className="text-4xl font-semibold ">Learn to code ‒ for free</h1>
        <br />
        <h1 className="text-4xl font-semibold">Build projects.</h1>
        <br></br>
        <h1 className="text-4xl font-semibold  ">Earn certificate</h1>
        <br></br>
        <p className='font-medium text-lg font-sans tc'>Since 2014,more than 4000 freeCodecamp.org graduates have gotten
            {<br/>}
            jobs at tech companies including
        </p>
        </div>
       
    <div className=" wi flex flex-row  bg-white justify-center items-center">
    <img className='mx-6' src={Apple} alt="apple"></img>
       <img className='mx-6' src={Google} alt="Google"></img>
       <img className='mx-6 ' src={Microsoft} alt="Microsoft"></img>
       <img className=' mx-6' src={Spotify} alt="Spotify"></img>
       <img className=' mx-6' src={Amazon} alt="Amazon"></img>
    </div>
    <div>
    <button className="text-lg border-2 bg-yellow-500 border-yellow-600 text-black w-80 h-12 mt-2" type="button">Get Started (its's free) </button>
      
    </div>
    </div>
  )
}

export default Home