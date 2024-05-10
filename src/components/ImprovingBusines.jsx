import React from 'react';
import img1 from '../assets/images/tabs-img.png';
import Button from 'react-bootstrap/Button';

export default function ImprovingBusines() {
    return (
        <>
            <div className=' container-fluid  my-5'>

                <div className='row'>
                    <div className='col-md-8 ps-5 bg-body-secondary'>


                        <div className='h1 pt-5'>
                            Empowering Your Business with Top Solutions.



                        </div>

                        <div className='text-secondary py-4 lh-lg' style={{ fontSize: '20px' }}>
                            We also provide full support to your multimedia team for the in-depth growth of your business. <br />
                            Our work is wide selected by users for the made to order multimedia creatives. VR gaming modules, game designs, high graphic content delivery.

                        </div>

                        <div className='py-4' align="center">
                            
                            <img src={img1} alt="tab img" className='w-75'/>
                            <Button variant="primary" size="lg" className='px-5 my-5'>LEARN MORE ABOUT OUR CUSTOMERS</Button>

                        </div>
                    </div>

                    <div className='col-md-4 d-flex flex-row-reverse'>
                        {/* <h1>nxcmvnxcmv </h1> */}

                        {/* <img src={contentImg} alt="" className='w-75 ' /> */}
                    </div>

                </div>






            </div>

        </>

    )
}
