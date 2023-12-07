import React from 'react'
import './RestCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
    console.log(restaurants); //contains array of data from parent AllRest
  return (
    <div> 
        <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
        <MDBCard style={{height:'580px',border:'3px solid red'}} className='cards'>
    <MDBCardImage className='img' src={restaurants.photograph}position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle className='CardTitle' style={{color:'white',fontWeight:'700'}}>{restaurants.name}</MDBCardTitle>
      <MDBCardText  className='address'>

       Address : {restaurants.address} <br />
       Cuisine type : {restaurants.cuisine_type}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
        </Link>
    </div>
  )
}

export default RestCard