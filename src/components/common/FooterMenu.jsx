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
// import { TbWorld } from "react-icons/tb";


function Footer() {
    const phoneNumber = '77094-14476'; // Your phone number here

    return (
        <>

            <div className="">
                <div className="container-fluid p-3 bg-body-tertiary text-secondary-emphasis">
                    <div className="container">
                        <div className="row py-4">
                            <div className="col-md-6 ">
                                {/* <img src="" alt="footer logo" /> */}
                                <div className=' text-warning fw-bold t'>EVOCUS
                                    IT TECHNOLOGY</div>


                            </div>

                            <div className="col-md-6 d-flex justify-content-end">
                                {/* <DropdownButton id="dropdown-item-button" title={<span><img src="" className='w-25 me-2' alt="" /> India</span>} className='me-3 ' variant="secondary">
                                    <Dropdown.ItemText>India</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton> */}
                                {/* <DropdownButton id="dropdown-item-button" title={<span><TbWorld/> English</span>} variant="secondary">
                                    <Dropdown.ItemText>English</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton> */}

                            </div>

                        </div>

                        <div className='row pt-3'>
                            <div className='col'>

                                <ul className='lh-lg'>
                                    <h6>WHAT WE DO</h6>
                                    <li>

                                        <a href="" className=''>Web Development</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>
                                    <li>

                                        <a href="" className=''>Web Development</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>
                                    <li>

                                        <a href="" className=''>Web Development</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Product Development</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>SERVICES</h6>
                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>
                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>
                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>
                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>
                                    <li>
                                        <a href="" className=''>Product Developmeny</a>
                                    </li>

                                </ul>


                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6> HOW WE WORK</h6>
                                    <li>

                                        <a href="" className=''>Dedicated Teams</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Remote Developers</a>
                                    </li>
                                    <li>

                                        <a href="" className=''>Dedicated Teams</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Remote Developers</a>
                                    </li>


                                </ul>

                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>COMPANY</h6>
                                    <li>

                                        <a href="" className=''>About US</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Work</a>
                                    </li>



                                </ul>

                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>FOLLOW US ON</h6>
                                    <li className='d-flex '>

                                        <a href="" className='me-3 fs-5 text-dark'><FaLinkedin /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaInstagramSquare /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaTwitterSquare /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaYoutube /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaFacebook /></a>



                                    </li>
                                    
                                        <a href={`tel:${phoneNumber}`} className='h4 text-success'>
                                        <IoCall /> {phoneNumber}
                                        </a>
                                    <li>

                                    </li>

                                    <li className='d-flex footerImg py-3'>

                                        <img src="" className='me-2 ' alt="" />
                                        <img src="" className='me-2' alt="" />



                                    </li>



                                </ul>

                            </div>
                        </div>
                        <hr />
                        
                        <p className='py-3'>
                        <h6 className='text-capitalize'>plot no, 11, office no. 202, 2nd floor, gayatri mandir road , shree nagar, it park road, persodi, nagpur-440022</h6>
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                        </p>

                    </div>


                </div>


            </div>



        </>
    )

}

export default Footer