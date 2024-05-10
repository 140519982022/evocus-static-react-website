import React from 'react';
import contentImg from '../assets/images/contentImg1.jpg';
import Button from 'react-bootstrap/Button';

export default function ImgContentSection2() {
    return (
        <>

            <div className=' container-fluid bg-body-secondary my-5'>

                <div className='row'>
                    <div className='col-md-6 ps-5'>


                        <div className='h1 pt-5'>
                        Expert Cloud Services


                        </div>

                        <div className='text-secondary py-4 lh-lg' style={{ fontSize: '20px' }}>
                        Our Experienced Architects Provide Personalized Design Solutions That <br /> Turn Your Dreams Into Reality.





                        </div>

                        <div className=' pe-5'>
                            <Button variant="primary" size="lg" className='px-5 my-3'>LEARN MORE ABOUT CLOUD SYSTEMS</Button>
                        </div>
                    </div>

                    <div className='col-md-6 d-flex flex-row-reverse'>


                        <img src={contentImg} alt="" className='w-75 ' />
                    </div>

                </div>






            </div>
        </>
    )
}
