import React from 'react';
import Button from 'react-bootstrap/Button';


export default function ContentButtonSection() {
    return (
        <>
            <div className='container-fluid '>

                <div className='container bg-body-secondary my-5'>
                    <div className='row'>
                        <div className='col-md-7 '>


                            <div className='h3 fw-normal pt-5 lh-base'>
                            Full insight into the journey <br />
                            Of Our Bussiness.
                            </div>

                            <div className='text-secondary py-4 lh-lg' style={{ fontSize: '18px' }}>
                            Rapidly changing market conditions, financial pressures and, at the same time, an increasingly urgent need for more sustainability.





                            </div>

                            
                        </div>

                        <div className='col-md-5 d-flex align-items-center justify-content-end '>
                        <div className='d-flex flex-row-reverse pe-5'>
                                <Button variant="primary" size="lg" className=' my-3'>CONTACT US</Button>
                            </div>
                        </div>

                    </div>





                </div>

            </div>

        </>
    )
}
