import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import slider1 from '../assets/images/slider1.avif';
import slider2 from '../assets/images/slider2.avif';
import slider3 from '../assets/images/slider3.avif';
import slider4 from '../assets/images/slider4.avif';

import Button from 'react-bootstrap/Button';


// import hmm2 from '../assets/images/slider3.avif';

export default function ContentCarouselSection() {

    const images = [
        slider1,
        slider2,
        slider3,
        slider2,
        slider4


    ];

    return (

        <>
            <div className='bg-body-secondary py-5 my-5 position-relative'>

                <div className='container'>
                    <div className='row'>

                        <div className='col-md-11 m-auto'>


                            <div className='h1 pt-5'>
                                Trusted by over 100+ of the world's most innovative companies
                            </div>

                            <div className='text-secondary py-4 text-center' style={{ fontSize: '20px' }}>
                                From consulting and strategy development to implementation and support, our comprehensive services <br />
                                can help your business thrive.
                            </div>
                        </div>
                    </div>


                    <Row className='row py-5'>
                        <Col>
                            <Carousel interval={2000} pause={false} wrap={true} showIndicators={false}>
                                {images.map((chunk, index) => (
                                    <Carousel.Item key={index}>
                                        <Row>
                                            {images.map((image, i) => (
                                                <Col key={i} className='col'>
                                                    <img src={image} alt={`Slide ${index * 5 + i}`} className='w-50' />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>


                </div>
                <div className='position-absolute top-100 start-50 translate-middle'>
                            <Button variant="primary" size="lg" className=''>LEARN MORE ABOUT US</Button>
                        </div>                        

            </div>


        </>
    )
}
