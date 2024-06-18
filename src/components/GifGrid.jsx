/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    getGifs(category)

  return (
<>
    <h4> {category} </h4>
</>
  )

}


