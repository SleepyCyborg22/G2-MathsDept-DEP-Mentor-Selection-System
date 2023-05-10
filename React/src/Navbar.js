import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Routes, Route, BrowserRouter} from 'react-router-dom';
import AvblMentors from './AvblMentors';
import MyMentors from './MyMentors';
import Vouch from './Vouch';
import Home from './Home';

function NavBar() {
  return (
    <BrowserRouter>
    <Navbar className="navbar-light navbar-expand-lg myNavbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='me-auto'>
          <h2>Mentor Selection System</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/avbl-mentors">Available Mentors</Nav.Link>
            <Nav.Link as={Link} to="/my-mentors">My Mentors</Nav.Link>
            <Nav.Link as={Link} to="/vouch">Vouch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/avbl-mentors" element={<AvblMentors/>} />
          <Route exact path="/my-mentors" element={<MyMentors/>} />
          <Route exact path="/vouch" element={<Vouch/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default NavBar;