/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['MERCURIO']);

    const onAddCategory = (newCategory)=>{
      if(categories.includes(newCategory)) return;
      //console.log(newCategory)
      setCategories([newCategory, ...categories])
    }

  return (
    <>
    <h1> Gif Expert APP </h1>

  <AddCategory 
    onNewCategory = {value => { onAddCategory(value) }}
  />

  { categories.map( (category)=> 
    <GifGrid 
    key={category} 
    category={category}
    />
  )}

    </>
  )
}


/* 
api.giphy.com/v1/gifs/search */
/* 7Q05UiFxZc55gfoRt0RBiZjcJiPyRfTg */