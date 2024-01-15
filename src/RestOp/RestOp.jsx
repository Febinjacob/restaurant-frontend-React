import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


function RestOp({op}) {
    console.log(op);//Timing details

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <p variant="primary" onClick={handleShow}>
                Operating Hours
            </p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor:'#ED7D31'}}>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'#ED7D31'}}>
                    <MDBListGroup style={{ minWidthL: '22rem' }} light >
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Monday:{op?.Monday}</MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Tuesday : {op?.Tuesday}</MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Wednesday : {op?.Wednesday}</MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Thursday : {op?.Thursday}</MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Friday : {op?.Friday}</MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Saturday : {op?.Saturday}</MDBListGroupItem>
                        <MDBListGroupItem style={{backgroundColor:'#ED7D31',color:'black'}}>Sunday : {op?.Sunday}</MDBListGroupItem>
                    </MDBListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RestOp