import React from 'react';
import Card from 'react-bootstrap/Card';
import { PiDesktopLight, PiTarget, PiLockKeyLight } from "react-icons/pi";

export default function OurTeam() {
    return (
        <>
            <div className='container-fluid py-5 my-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-12 m-auto'>
                            <h1 className='text-center fw-bolder' style={{ color: '#364167' }}>OUR TEAM PROVIDES</h1>
                            <p className='text-secondary text-center px-5 py-5' style={{ fontSize: '20px' }}>
                                Our Strength Lies In Our Individuality. Set Up The Team Strives To Bring In The Best Talent In Various Fields, From Managements To Design And Sales.
                            </p>
                        </div>
                    </div>
                    <div className='row py-5' style={{ backgroundColor: '#99a9bb' }}>
                        <div className='col-md-4 mb-5'>
                            <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded h-100 d-flex flex-column justify-content-between'>
                                <PiDesktopLight className='text-primary mx-auto mb-3' style={{ width: '75%', height: 'auto' }} />
                                <Card.Body>
                                    <Card.Title className='py-3 fw-bolder'>Better overview</Card.Title>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        Overview of the entire industrial network – up to tens of thousands of network components
                                    </Card.Text>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        Policy-based, multi-device network configurations
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded h-100 d-flex flex-column justify-content-between'>
                                <PiTarget className='text-primary mx-auto mb-3' style={{ width: '75%', height: 'auto' }} />
                                <Card.Body>
                                    <Card.Title className='py-3 fw-bolder'>More added value</Card.Title>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        Cost savings thanks to the convenience of central configuration and management of OT networks
                                    </Card.Text>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        Easy use of all network services relevant to industrial networks
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <Card align="center" className='shadow-lg p-3 bg-body-tertiary rounded h-100 d-flex flex-column justify-content-between'>
                                <PiLockKeyLight className='text-primary mx-auto mb-3' style={{ width: '75%', height: 'auto' }} />
                                <Card.Body>
                                    <Card.Title className='py-3 fw-bolder'>More security</Card.Title>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        Central firewall and NAT configuration and management. Security management in accordance with security guideline
                                    </Card.Text>
                                    <Card.Text className='lh-lg text-secondary' style={{ fontSize: '20px' }}>
                                        User and access authorization via central user management
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
