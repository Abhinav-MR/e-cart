/* eslint-disable no-unused-vars */
import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon  } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
     <MDBFooter className='text-center bg-primary '>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
             E-Cart
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
               
               <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>  
               
              </p>
              <p>
              <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>  
               
              </p>
              <p>
              <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>  
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
             
              <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>  
              </p>
              
              <p>
                
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}> React Bootstrap</Link>  
                
              </p>
              <p>
             
              <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>bootsWatch</Link>  
              </p>
            
  
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <div>
              
                <input type='email' id='e_id' placeholder='Enter Your Email ID'></input>
               
                
                <Button variant="warning ">Subscribe</Button>
                
                <br></br>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          
        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
         Copyright © 2024 Media Player.
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Build with React
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer