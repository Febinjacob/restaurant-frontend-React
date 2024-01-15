import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
function RestReview({re}) {
    console.log(re);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <p variant="primary" onClick={handleShow}>
              Reviews
            </p>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Reviews</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                      {
                        re?.map(item=>(
                        <div>
                            <div style={{backgroundColor:'',borderBlockColor:'black',borderRadius:'10px'}}>
                            <p>Name : <img style={{width:'18px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png" alt="" /> {item.name}</p>
                            <p>Date : {item.date}</p>
                            <p>Rating : {item.rating} <img style={{width:'60px',height:'80px'}} src="https://img.freepik.com/premium-vector/rating-stars-icon-review-productinternet-website-mobile-application_182604-63.jpg" alt="" /></p>
                            <p>Comments : {item.comments}</p>
                            </div><br /><br />
                        </div>
                        ))
                      }
                        
                    
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default RestReview