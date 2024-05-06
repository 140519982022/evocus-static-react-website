import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import devImg from '../assets/images/Development-1.png'


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
            <div className='container-fluid py-5'>
                <div className='container'>
                <div className='row '>
                        <div className='col-md-10 m-auto'>
                            <marquee className="text-danger h6 fw-bolder pt-5 ">EVOCUS IT TECHNOLOGY - SERVICES</marquee>

                            <h2 className='text-center fw-bolder pb-5'>Supercharge Your Product - From Design To Delivery.</h2>

                        </div>
                    </div>
                    <div className='row'>

                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>

                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>

                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>

                    </div>

                </div>

            </div>


        </>
    )

}

function ServiceCard() {
    return (

        <>
            <div className='col-md-4 mb-5'>
                <Card >
                    <Card.Img variant="top" src={devImg} className='w-25 m-auto' />
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                            Delivering powerful web solutions using the right mix of front and back-end technologies for market leaders and growing businesses.
                        </Card.Text>
                        <Button variant="primary" >Click Here</Button>
                    </Card.Body>
                </Card>

            </div>

        </>
    )

}

export default OurServices