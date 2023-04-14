import React from 'react'
import {Navbar,Container,Button,Nav ,NavDropdown,Row,Col} from 'react-bootstrap'
import './header.css'
 

function Header() {

  return (
    
              <Navbar className='navbar' >
        <Container className='navContainer'>
          <Navbar.Brand href="#home"style={{display:"flex"}} >
            <img
            
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <h3 style={{color:"white"}}> <a href="/">HabitReminder</a> </h3>
          </Navbar.Brand>
          
          <Nav.Item>

        <Nav.Link    href="/logout"><h4 style={{color:'white',display:"flex"}}>Logout</h4></Nav.Link>
        <NavDropdown title="ic" id="nav-dropdown" style={{display:"none",marginRight:"50px"}}>
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      </Nav.Item>


        </Container>
      </Navbar>
  
  )
}

export default Header