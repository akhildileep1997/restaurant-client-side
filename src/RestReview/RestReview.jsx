import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
function RestReview({review,name, ...props}) {
    console.log(review);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>     
       <p variant="primary" onClick={handleShow} className="me-2">
    {name} Review <i className="fa-solid fa-hand-point-left ms-3 fs-5"></i>
  </p>
  <Offcanvas show={show} onHide={handleClose} {...props}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Reviews</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    {
        review?.map(item=>(
            <div>
                <p>Name : {item.name}</p>
                <p>Date : {item.date}</p>
                <p>Comments : {item.comments}</p>
            </div>
        ))
    }
    </Offcanvas.Body>
  </Offcanvas>
  </div>
  )
}

export default RestReview