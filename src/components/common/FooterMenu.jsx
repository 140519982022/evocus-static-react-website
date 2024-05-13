// import footerZomato from '../../images/blackZomato.avif'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../../assets/css/footer.css';

// import appStoreFooter from '../../images/app-footer.webp';
// import googlePlayFooter from '../../images/googlePlayFooter.webp';
// import indiaImg from '../../images/in.webp'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import { TbWorld } from "react-icons/tb";
import footerLogo from '../../assets/images/footerLogo.png';


function Footer() {
    const phoneNumber = '+91 8419860340'; // Your phone number here

    const email1 = 'info@22-applersolutions.com';
    const email2 = 'applersolutions2@gmail.com';


    return (
        <>

            <div className="">
                <div className="container-fluid p-3 footer-bg text-white">
                    <div className="container">
                        {/* <div className="row py-4">
                            <div className="col-md-6 ">

                            </div>

                            <div className="col-md-6 d-flex justify-content-end">

                            </div>

                        </div> */}

                        <div className='row pt-5'>
                            <div className='col-md-4'>

                                <div className='lh-lg'>
                                    {/* <img src={footerLogo} alt="footer logo" className='w-75 pb-4' /> */}

                                    

                                    <a href={`mailto:${email1}`}>
                                    <h5 className='py-3 fw-normal'>info@22-applersolutions.com</h5>
                                    </a>
                                    
                                    <a href={`mailto:${email2}`}>
                                        <h5 className='py-3 fw-normal'>applersolutions2@gmail.com</h5>
                                    </a>

                                    
                                    <a href={`tel:${phoneNumber}`}>
                                        <h5 className='py-3 fw-normal'>+91 8419860340</h5>
                                    </a>

                                    <h5 className='py-3 fw-normal'>Designed by Anjali Kothari

                                    </h5>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='lh-lg'>
                                    <h2 className='pb-3'>Quick Links
                                    </h2>
                                    <li>
                                        <MdKeyboardDoubleArrowRight className='fs-2' /> &nbsp;&nbsp;
                                        <a href="" className='fs-4 fw-normal'>Home
                                        </a>
                                    </li>
                                    <li>
                                        <MdKeyboardDoubleArrowRight className='fs-2' /> &nbsp;&nbsp;
                                        <a href="" className='fs-4 fw-normal'>Services</a>
                                    </li>
                                    <li>
                                        <MdKeyboardDoubleArrowRight className='fs-2' /> &nbsp;&nbsp;
                                        <a href="" className='fs-4 fw-normal'>About</a>
                                    </li>
                                    <li>
                                        <MdKeyboardDoubleArrowRight className='fs-2' /> &nbsp;&nbsp;
                                        <a href="" className='fs-4 fw-normal'>Contact</a>
                                    </li>


                                </div>


                            </div>
                            <div className='col-md-4'>
                                <div className='lh-lg'>
                                    <h5 className='fs-5 lh-base fw-normal'><FaLocationDot /> &nbsp;&nbsp;Address
                                    </h5>
                                    {/* <li className='d-flex '> */}

                                    <h5 className='fs-5 lh-base fw-normal'>
                                        Office no.403 Cresecent business park <br />
                                        pool road sakinaka <br />
                                        andheri east 400-072
                                    </h5>


                                    <h5 className='fs-5 lh-base fw-normal pt-4'><FaLocationDot />&nbsp;&nbsp;Branch Address</h5>

                                    <h5 className='fs-5 lh-base fw-normal'>
                                        Plot no.11,2nd floor gayatri mandir road <br />
                                        shree nagar, IT park road, Parsodi <br />
                                        nagpur-maharashtra 440-002

                                    </h5>
                                    {/* <a href="" className='me-3 fs-5 text-white'><FaLinkedin /></a>
                                        <a href="" className='me-3 fs-5 text-white'><FaInstagramSquare /></a>
                                        <a href="" className='me-3 fs-5 text-white'><FaTwitterSquare /></a>
                                        <a href="" className='me-3 fs-5 text-white'><FaYoutube /></a>
                                        <a href="" className='me-3 fs-5 text-white'><FaFacebook /></a> */}



                                    {/* </li> */}

                                    {/* <a href={`tel:${phoneNumber}`} className='h4 text-white'>
                                        <IoCall /> {phoneNumber}
                                    </a> */}
                                    {/* <li>

                                    </li> */}
                                    {/* 
                                    <li className='d-flex footerImg py-3'>

                                        <img src="" className='me-2 ' alt="" />
                                        <img src="" className='me-2' alt="" />



                                    </li> */}



                                </div>

                            </div>
                        </div>
                        {/* <hr />

                        <p className='py-3'>
                            <h6 className='text-capitalize'>plot no, 11, office no. 202, 2nd floor, gayatri mandir road , shree nagar, it park road, persodi, nagpur-440022</h6>
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                        </p> */}

                    </div>


                </div>


            </div>



        </>
    )

}

export default Footer