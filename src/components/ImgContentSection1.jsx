import React from 'react';
import contentImg from '../assets/images/contentImg1.jpg';
import Button from 'react-bootstrap/Button';

export default function ImgContentSection1() {
    return (
        <>

            <div className='container-fluid bg-body-secondary my-5 '>

                <div className='container'>
                <div className='row'>

                    <div className='col-md-6 mx-auto'>


                        <img src={contentImg} alt="" className='w-75' />
                    </div>
                    <div className='col-md-6 '>


                        <div className='h1 pt-5'>
                            Hey Technology
                        </div>

                        <div className='text-secondary py-4 lh-lg' style={{ fontSize: '20px' }}>
                            We Provide Comprehensive Solutions For Businesses, Including Cloud <br /> Computing, Multimedia Support, 2D And 3D Animation, Server And <br /> Network Management, Automation Software, And Debugging.



                        </div>

                        <div className='d-flex flex-row-reverse pe-5'>
                            <Button variant="primary" size="lg" className='my-3'>LEARN MORE ABOUT US</Button>
                        </div>                        
                    </div>
                </div>





                </div>

            </div>
        </>
    )
}
