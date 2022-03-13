import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const TopNav = ({ news }) => {

  return (
    <Navbar collapseOnSelect expand='lg' bg="dark" >
      <Container>
        <Navbar.Brand href='/'><h1 style={{color:'white'}}>News Portal</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav' >
          <Nav className='ml-auto'>
            <Nav.Link activeClassName='active'  exact as={NavLink} to='/'>
              <h5  style={{color:'white'}}>Home</h5>
            </Nav.Link>
            <Nav.Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
)(TopNav);
