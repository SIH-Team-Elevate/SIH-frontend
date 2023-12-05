import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Elevate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#history">History</Nav.Link>
            <Nav.Link href="#Help & Support">Help & Support</Nav.Link>
            <Nav.Link href="#Announcements">Announcements</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;