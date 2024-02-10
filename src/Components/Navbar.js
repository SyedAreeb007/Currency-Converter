import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import navLogo from '../Assets/Images/currency.webp';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Nav.Link as={Link} to='/' style={{ color: 'black', textDecoration: 'none' }}>
                <img className='navLogo' src={navLogo} alt="currencyLogo" />
            </Nav.Link>
            <Nav variant="underline" defaultActiveKey="/home" className='nav-links'>
                <Nav.Item>
                    <Nav.Link as={Link} to='/CurrencyInput' style={{ color: 'black', textDecoration: 'none' }}>
                        Converter
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/Info' style={{ color: 'black', textDecoration: 'none' }}>
                        Info
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;
