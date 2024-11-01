"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const page = () => {
  const [Image, setImage] = useState([])

  // UseEffect excutes without button click also 
  useEffect(() => {
    getImages()

  }, [])

  const getImages = async () => {
    try {
      const reponse =await axios.get('https://picsum.photos/v2/list')
      // console.log(reponse.data);
      const data = reponse.data;
      setImage(data);
      console.log(Image);
      
    } catch (error) {
      console.log(error);
      console.error("Error Fetching Image");
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white '>Get Images</button>
      <div className='p-10'>
        {
          Image.map((obj , i) => {
            return <img key={i} src={obj.download_url} width={300} height={300}
              className='m-10 rounded inline-block'
            ></img>
          })
        }
      </div>
    </div>
  )
}



export default page