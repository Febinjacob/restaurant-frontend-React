import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
      <MDBNavbar style={{ backgroundColor: '#F6F1EE' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className=''>
            <i class="fa-solid fa-utensils m-2" ></i> <i className='fa-solid' style={{ color: '#ED7D31' }} >Resto Cafe</i>
            <div style={{ paddingLeft: '700px' }}>
              <h5>Home</h5>
            </div>
            <div style={{paddingLeft:'20px'}}>
              <h5>Events</h5>
            </div>
            <div style={{paddingLeft:'20px'}}>
              <h5>Menus</h5>
            </div>
            <div style={{paddingLeft:'20px'}}>
              <h5>About Us</h5>
            </div>
            <div style={{paddingLeft:'30px'}}>
              <button className='btn' style={{color:'#F6F1EE',backgroundColor:'#ED7D31'}}>Contact Us</button>
            </div>

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header