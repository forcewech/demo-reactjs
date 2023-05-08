import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
         navigate('/login');
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to='/' className='navbar-brand'>Hỏi Dân IT</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                        <NavLink to='/admins' className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn btn-primary mx-3' onClick={() => handleLogin()}>Login</button>
                        <button className='btn btn-secondary'>Logout</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;