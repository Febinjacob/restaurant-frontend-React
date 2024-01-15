import React from 'react'
import './RestCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({ restaurants }) {
    console.log(restaurants);
    return (
        <div>
            <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
            <MDBCard className='card'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

                    <MDBCardImage src={restaurants.photograph} position='top' alt='...' />
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{restaurants.name}</MDBCardTitle>
                    <MDBCardText>
                        Address:{restaurants.address}
                        <br />
                        Cuisine type:{restaurants.cuisine_type}
                    </MDBCardText>
                    
                </MDBCardBody>


            </MDBCard>
            </Link>
        </div>
    )
}

export default RestCard