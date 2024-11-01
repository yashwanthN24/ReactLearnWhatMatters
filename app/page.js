"use client"
import React from 'react'

const page = () => {
  let marks = 90; 

  const changeMarks = () => {
    console.log(marks);
    marks = 78;
    console.log(marks);
    page();
  }
  return (
    <>

      <h1 className='font-bold text-xl text-red-800'>Hello This is my marsk {marks}</h1>
      <button onClick={changeMarks} className='bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold'>Click me </button>
    
    </>
    
  )
}

export default page