import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';



function ViewRest() {
  //create a state for holding restaurant details
  const [restDetails,setRestDetails] = useState([])
  const {id} = useParams()      // <=> destructuring      //    const pathParams = useParams()                       
  console.log(id);                                        //   console.log(pathParams.id);
  
  //make an Api call to fetch particular restaurant details
  const fetchData = async() =>{
    const {data} = await axios.get(`${base_url}/restaurants/${id}`) //http://localhost:3001/restaurants/5
    console.log(data);
    setRestDetails(data)
  }
  console.log(restDetails); //particular detail

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <>
  {
    restDetails?
    <Row>
      <Col className='text-center'>
      {/* image */}
      <Image style={{height:'500px',width:'500px',padding:'40px'}} src={`${restDetails.photograph}`} fluid />
      </Col>

      <Col style={{marginRight:'200px',padding:'40px'}}>
        <h3>{restDetails.name}</h3>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem style={{backgroundColor:'red'}} className='p-3 fs-5'>Address : {restDetails.address}</MDBListGroupItem>
      <MDBListGroupItem className='p-3'>Cuisine Type : {restDetails.cuisine_type}</MDBListGroupItem>
      <MDBListGroupItem className='p-3'>  Neighborhood : {restDetails.neighborhood}</MDBListGroupItem>
      <MDBListGroupItem className='p-3'>< RestOp op={restDetails.operating_hours} /></MDBListGroupItem>
      <MDBListGroupItem className='p-3'> <RestReview review={restDetails.reviews} /></MDBListGroupItem>
    </MDBListGroup>
     
      </Col>
    
  </Row> : <p>No data</p>
  }
    </>
  )
}

export default ViewRest