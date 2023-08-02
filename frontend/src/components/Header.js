import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
import logo from '../assets/PlanItFitLogowslogan.jpg';

const Header = () => {

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
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
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* <SearchBox /> */}
              <LinkContainer to='/'>
            <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>

            <NavDropdown title='Menu' id='menu'>
                  <LinkContainer to='/plannerlist'>
                    <NavDropdown.Item>Planner</NavDropdown.Item>
                  </LinkContainer>
                  
                  <LinkContainer to='/tracker'>
                    <NavDropdown.Item>Tracker</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/goals'>
                    <NavDropdown.Item>Goals</NavDropdown.Item>
                  </LinkContainer>


                </NavDropdown>
              
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
                </LinkContainer>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  {/* <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer> */}
                  
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;