import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      <Navbar className='fixed-top' expand="lg" style={{backgroundColor: "#436850", height: "auto" }}>
      <Container>
        <Navbar.Brand style={{color: "white"}}>Know Sylhet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{textAlign: "center", width: "100%"}}>
            <Nav.Link href="/user" >Home</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/edu">Education</Nav.Link>
            <Nav.Link href="/tragedies">Tragedies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;