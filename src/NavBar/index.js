import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
    {/* //   <Navbar bg="primary" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="/">Elevate</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#work">Work</Nav.Link>
    //         <Nav.Link href="#history">History</Nav.Link>
    //         <Nav.Link href="#Help & Support">Help & Support</Nav.Link>
    //         <Nav.Link href="#Announcements">Announcements</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar> */}
    <div className="header">
    <div className="logo"></div>
    <div className="ele">
        <div className="heading">Home</div>
        <div className="heading">Work</div>
        <div className="heading">History</div>
        <div className="heading">Help &amp; Support</div>
        <div className="heading">Announcement</div>
    </div>
    <div className="profile">
        <div className="profile-img">
            <span className="material-symbols-outlined">
                account_circle
                </span>
        </div>
        <div className="profile-name">Pratyaksh</div>
    </div>
</div>
</>
  );
}

export default NavigationBar;