import React from 'react'
import "../Components/about.css"
import pic from "../images/coffee1.png"
import pic2 from '../images/coffee1.png'

import pic3 from '../images/coffee1.png'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1>About our cafe</h1>
        <i>"Americano,Aroma,Cortado,Mocha,Macchiato,Flat White, Decaf,Irish Coffee,Iced Coffee,Arabica, Robusta, Excelsa and Liberica etc.."</i>
       </div>
       <div className='top1'>
        <img src={pic} alt=''/>
       <h1>Special coffee</h1>
       <p>FLAT WHITE</p>
        <i>"A flat white is a blend of micro-foamed milk poured over a single or double shot of espresso. This microfoam is steamed milk infused with air, to create a smooth and velvety texture and creamy taste.".</i>
       </div>
       <div className='top2'>
       <img src={pic2} alt=''/>
       <h1>Special Coffee</h1>
       <p>Mocha</p>
        <i>"Deliciously sweet, nutty and chocolatey. This creamy coffee drink is an espresso-based beverage but it often causes confusion as to exactly what a mocha is"</i>
       </div>
      
 
    </div>
   <div className='top3'>
    <img src={pic3} alt=""/>
    <div>
    <h1>Special Coffee</h1>
    <p>Cortado</p>
    <i>Unlike other coffee types the milk isn’t texturised and instead, Cortado coffee is made with lightly steamed milk, no froth or foam. The steamed milk on top reduces the acidity of the coffee and creates a micro-foam which doesn’t separate from the espresso, giving it a strong and rich flavour.</i>
   
    </div>
    </div> 
   </div>
   </section>
  )
}
