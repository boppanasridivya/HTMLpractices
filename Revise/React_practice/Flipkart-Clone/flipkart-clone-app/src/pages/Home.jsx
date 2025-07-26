import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Slideshow from '../components/Slideshow'

// const dummyProducts = [
//     {
//         id:1,
//          name : "iphone",
//         price : 139999,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70",
//         quantity:1
//     },
//     {
//         id:2,
//         name : "RemoteCar",
//         price : 1700,
//         image : "https://rukminim2.flixcart.com/image/312/312/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=90",
//          quantity:1
//     },
//     {
//         id:3,
//         name : "LG Tv",
//         price : 50000,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/television/p/g/d/-original-imahdzrcsdbcs4tw.jpeg?q=70",
//          quantity:1
//     },
//     {
//         id:4,
//         name : "Alexa",
//         price : 20000,
//        image : "https://rukminim2.flixcart.com/image/312/312/xif0q/speaker/t/h/j/-original-imahdnxccsfkjkwq.jpeg?q=70",
//         quantity:1
//     },
//     {
//         id:5,
//         name : "Smart watch",
//         price : 5000,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/smartwatch/h/g/p/49-pulsewave-smart-band-t500-t800-android-ios-touch-18-yes-original-imah85wmjf5bz2hh.jpeg?q=70",
//          quantity:1
//     },
//     {
//         id:6,
//         name : "Gear Cycle",
//         price : 10000,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/cycle/h/5/q/beast-29t-multispeed-21-speed-mountain-bike-with-fs-dd-brake-29-original-imah6j8fgbghsqbd.jpeg?q=70",
//          quantity:1
//     },
//     {
//         id:7,
//         name : "Cardio Gear Cycle",
//         price : 20000,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/cycle/e/m/w/fade-27-5-teal-green-double-alloy-rim-dual-disk-brake-front-original-imah4egrvndx4fgp.jpeg?q=70",
//          quantity:1
//     },
//     {
//         id:8,
//         name : "Projector",
//         price : 9999,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/projector/u/s/0/zeb-qlp-5-pixaplay-73-13-12-zeb-qlp-5-pixaplay-73-full-hd-original-imahch2exerg3uyf.jpeg?q=90",
//          quantity:1
//     },
//     {
//         id:9,
//         name : "Sony Camera",
//         price : 40000,
//         image : "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/3/i/3/-original-imagz5tqbawcrzhg.jpeg?q=70",
//          quantity:1
//     },
//     {
//         id:10,
//         name : "Wall Clock",
//         price : 1000,
//         image : "https://rukminim2.flixcart.com/image/210/210/xif0q/wall-clock/r/o/b/handpainted-peacock-wall-clock-32-5-wc-331-analog-divinecrafts-original-imahbzdadxeahpj5.jpeg?q=90",
//          quantity:1
//     },
//     {
//         id:11,
//         name : "Hair Dryers",
//         price : 12000,
//         image : "https://rukminim2.flixcart.com/image/120/120/xif0q/hair-dryer/m/y/p/bouncy-curls-straight-styles-versatile-styling-bouncy-curls-original-imahay4gsj9dysch.jpeg?q=60",
//          quantity:1
//     },
//     {
//         id:12,
//         name : "Office Chair",
//         price : 3000,
//         image : "https://rukminim2.flixcart.com/image/412/312/xif0q/office-study-chair/z/t/2/1-teak-sagun-58-42-js-29-beaatho-121-92-original-imagrwgshgp2bhwv.jpeg?q=90",
//          quantity:1
//     },
//     {
//         id:13,
//         name : "Matress",
//         price : 2999,
//         image : "https://rukminim2.flixcart.com/image/120/120/j5ihlzk0/bed-mattress/2/y/c/6-48-75-skbnnldb75x48x06-bonnell-spring-peps-original-imaevnpjqz2mwyrz.jpeg?q=90",
//          quantity:1
//     },
//     {
//         id:14,
//         name : "Instant Cameras",
//         price : 4999,
//         image : "https://rukminim2.flixcart.com/image/312/312/kbzergw0/instant-camera/m/h/u/instax-instant-camera-mini-11-fujifilm-original-imaft7fpfzkcsequ.jpeg?q=70",
//          quantity:1
//     }
// ]



const Home = () => {
    const[products, setProducts] =useState([]);

useEffect(()=>{
    fetch("http://localhost:3000/dummyProducts")
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    .catch(console.error)
},[])
  return (
    <>
    <Slideshow/>
       <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
      {products.map((item)=>{
        return <ProductCard key = {item.id} {...item}/>
      })}
    </div>
    </>
 
  )
}

export default Home




