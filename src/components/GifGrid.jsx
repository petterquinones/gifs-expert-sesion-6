/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async()=>{
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect(()=>{
    getImages()
  }, [])

  return (
<>
    <h4> { category } </h4>
    
    <div className="card-grid">
      {images.map( ({ id, title, url})=> (
        <GifItem 
          key={id} 
          title= {title} 
          url= {url} />
        )
      )} 
    </div>
 
</>
  )

}


