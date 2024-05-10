import React from 'react';
import '../assets/css/aboutus.css';
import Button from 'react-bootstrap/Button';

import aboutImg from '../assets/images/aboutImg.jpg';

export default function AboutUsSection() {
  return (
    <>

    <div className='container my-5'>
        <div className='row'>
        <div className=' col-md-6 bg-color p-3 content-height' >
           <h1 className='text-white fw-bold py-3'>
           ABOUT US
           </h1>

           <div className='text-white fs-5 py-3'>
           Digital Enterprise – Next Level Flexibility


           </div>

           <div className='text-white fs-5 py-3 lh-lg'>
           Discover how to benefit from merging the real and digital worlds and find out the possibilities provided by the Digital Twins of product, machine, plant, and the entire aircraft production. In order to facilitate the start and implementation of digitalization, we offer comprehensive consulting and develop a customized strategy and roadmap together with you..


           </div>

           <Button variant="light" size="lg" className='px-5 '>Just Do It !</Button>
        </div>

        <div className='col-md-6 abt-img' >

            <img src={aboutImg} alt="about section img" className='img-fluid ' style={{height:'100%'}}/>

        </div>

        </div>
    </div>
    
    
    </>
  )
}
