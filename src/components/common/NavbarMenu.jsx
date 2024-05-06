import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { MdEmail } from "react-icons/md";



function NavbarMenu() {
    const emailAddress = 'evocusittechnology@gmail.com'; // Your email address here
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow p-4 bg-body-tertiary rounded position-sticky top-0 ">
                <Container>
                    <Navbar.Brand href="#home" className='text-center text-warning fw-bold display-1'>EVOCUS <br></br> IT TECHNOLOGY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">Work</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Contact Us
                            </Nav.Link> */}
                            {/* <p>
                Contact us at{' '}
                <a href={`mailto:${emailAddress}`}>
                    {emailAddress}
                </a>
            </p> */}
                            <Button variant="warning"><a href={`mailto:${emailAddress}`} className='text-dark'><MdEmail /> &nbsp;Get in Touch
                </a></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )

}

export default NavbarMenu