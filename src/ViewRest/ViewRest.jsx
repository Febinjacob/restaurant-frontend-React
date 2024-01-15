import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';

function ViewRest() {
  //to get particular id from url 

  const { id } = useParams()
  console.log(id);


  const [restDeatails, setRestDetails] = useState([])
  //Make an API call to fetch particular restaurent details
  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`)
    console.log(data);//particular details
    setRestDetails(data)
  }
  console.log(restDeatails);//particular details
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className='container'>
    {
        restDeatails ?
          <Row>

            <Col>
              {/* image */}
              <Image  src={`${restDeatails.photograph}`} fluid style={{ height: '500px', width: '400px', padding: '20px',borderRadius:'30px' }} />
            </Col>

            <Col style={{paddingTop:'30px'}}>
              <h1 className='text-center m-2'>{restDeatails.name}</h1>
              <MDBListGroup style={{ minWidth: '22rem' }} light>
                <MDBListGroupItem tag='a' href='#' action noBorders active aria-current='true' className='px-3'>
                  Address:{restDeatails.address}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                  Cuisine Type: {restDeatails.cuisine_type}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                  Neighborhood: {restDeatails.neighborhood}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                  <RestOp op={restDeatails.operating_hours} />
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                  <RestReview re={restDeatails.reviews} />
                </MDBListGroupItem>
              </MDBListGroup>
            </Col>

          </Row> : <p>No Data</p>
      }
    </div>
      
    </>
  )
}

export default ViewRest