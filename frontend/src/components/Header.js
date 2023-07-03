import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/PlanItFitLogowslogan.jpg'

const Header = () => {
  return (
    <header className='sticky-top'>
      <Navbar bg="light" expand="lg" collapseOnSelect className="header">
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand className="brand-container">
            <div className="brand-content">
              <img
                alt=""
                src={logo}
                width="400"
                height="70"
                className="d-inline-block align-top brand-image"
              />
            </div>
          </Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            
            <Nav className='nav'>
            <LinkContainer to='/'>
            <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
            </LinkContainer>
        
            {/* {userInfo ? (
                <NavDropdown title={userInfo.userName} id='username'>
                   <LinkContainer to='/recipes/user'>
                    <NavDropdown.Item>Recipes</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>

                </NavDropdown>
              ): (
              <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
              </LinkContainer>
             )}
             {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/recipelist'>
                    <NavDropdown.Item>Recipes</NavDropdown.Item>
                  </LinkContainer>
                  
                </NavDropdown>
              )} */}
            </Nav>
            {/* <SearchBox /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
