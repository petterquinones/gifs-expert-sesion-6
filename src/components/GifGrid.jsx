/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const {images , isLoading} = useFetchGifs( category)


  return (
<>
    <h4> { category } </h4>
    {
      isLoading && (<h2> Cargando... </h2>)
    }

    
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


