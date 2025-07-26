import React, { useEffect, useState } from 'react'

const images=[
  "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/564b82e9b6567d92.jpeg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/1338bd4fc60390d8.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/1338bd4fc60390d8.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/5b309e98775e22e4.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/2982a2e4030d5591.jpg?q=90"
];

const Slideshow = () => {

    const[currentImage,setCurrentImage]= useState(0);

    useEffect(()=>{
      const timer = setInterval(()=>{
        setCurrentImage((prev)=>(prev+1)%images.length)
      },3000);

      return(()=>clearInterval(timer));

    },[])
  return (
    <div style={{margin:"20px auto",maxWidth:"100%",paddingTop:"80px"}}>
      <img src = {images[currentImage]} alt={`Slide $[currentImage]`} style={{width:"100%",height:"auto",borderRadius:"8px"}}/>
    </div>
  )
}

export default Slideshow
