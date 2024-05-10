import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import icon1 from '../assets/images/icone-1.png';
import icon2 from '../assets/images/icone-2.png';
import icon3 from '../assets/images/icone-3.png';



function OurServices() {
    return (
        <>

            {/* <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-10 m-auto'>
                            <marquee className="text-danger h6 fw-bolder pt-5">EVOCUS IT TECHNOLOGY - SERVICES</marquee>

                            <h2 className='text-center fw-bolder'>Supercharge Your Product - From Design To Delivery.</h2>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container-fluid py-5 my-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-10 m-auto'>
                            {/* <marquee className="text-danger h6 fw-bolder pt-5 ">EVOCUS IT TECHNOLOGY - SERVICES</marquee> */}

                            <h1 className='text-center fw-bolder' style={{ color: '#364167' }}>SERVICE</h1>

                            <h1 className='text-center fw-bolder pt-5 pb-4' style={{ color: '#364167' }}>Optimize Every Touchpoint In The Customer Experience</h1>

                            <p className='text-secondary text-center px-5' style={{ fontSize: '20px' }}>
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem <br />
                                Ipsum Has Been The Industry's
                            </p>

                        </div>
                    </div>
                    <div className='row py-5'>

                        {/* <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard> */}

                        <div className='col-md-4 mb-5'>
                            <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded pt-5'>
                                <Card.Img variant="top" src={icon1} className='w-25 m-auto shadow-lg p-3 bg-body-tertiary rounded rounded-circle' />
                                <Card.Body>
                                    <Card.Title className='py-4 fw-bolder'>Expert Cloud Services</Card.Title>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        It is a long established fact that a reader will be distracted by the
                                        readable.
                                    </Card.Text>
                                    <Button variant="primary my-4" size="lg">Learn More</Button>
                                </Card.Body>
                            </Card>

                        </div>

                        <div className='col-md-4 mb-5'>
                            <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded pt-5'>
                                <Card.Img variant="top" src={icon2} className='w-25 m-auto shadow-lg p-3 bg-body-tertiary rounded rounded-circle' />
                                <Card.Body>
                                    <Card.Title className='py-4 fw-bolder'>Innovative Multimedia.</Card.Title>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        It is a long established fact that a reader will be distracted by the
                                        readable.
                                    </Card.Text>
                                    <Button variant="primary my-4" size="lg">Learn More</Button>
                                </Card.Body>
                            </Card>

                        </div>

                        <div className='col-md-4 mb-5'>
                            <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded pt-5'>
                                <Card.Img variant="top" src={icon3} className='w-25 m-auto shadow-lg p-3 bg-body-tertiary rounded rounded-circle' />
                                <Card.Body>
                                    <Card.Title className='py-4 fw-bolder'>Timeless Animation</Card.Title>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        It is a long established fact that a reader will be distracted by the
                                        readable.
                                    </Card.Text>
                                    <Button variant="primary my-4" size="lg" >Learn More</Button>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>

                </div>

            </div>


        </>
    )

}

function ServiceCard() {
    return (

        <>
            {/* <div className='col-md-4 mb-5'>
                <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded pt-5'>
                    <Card.Img variant="top" src={icon1} className='w-25 m-auto shadow-lg p-3 bg-body-tertiary rounded rounded-circle' />
                    <Card.Body>
                        <Card.Title className='py-4 fw-bolder'>Expert Cloud Services</Card.Title>
                        <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                            It is a long established fact that a reader will be distracted by the
                            readable.
                        </Card.Text>
                        <Button variant="primary my-4"  >Learn More</Button>
                    </Card.Body>
                </Card>

            </div> */}

        </>
    )

}

export default OurServices