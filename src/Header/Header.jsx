import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar style={{backgroundColor:'red',height:'90px'}} light className='navbar' >
    <MDBContainer fluid>
      <MDBNavbarBrand style={{fontWeight:'800'}} href='/'className='text-white'>
      <i className="fa-solid fa-utensils ms-5 me-3 fs-2"></i>
        Cafe-Cafeel
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  </div>
  )
}

export default Header