import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";
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
                        <button style={{border: "1px solid black"}} className='btn mx-3' onClick={() => handleLogin()}>Login</button>
                        <NavLink to='/register'><button style={{backgroundColor: "black", color: "white"}} className='btn'>Sign up</button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;