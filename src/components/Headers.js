import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Headers = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Event Game Booking</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/checkout" className="text-decoration-none text-light mx-2">Checkout</NavLink>
                        {/* <NavLink to="/" className="text-decoration-none text-light">Features</NavLink> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers