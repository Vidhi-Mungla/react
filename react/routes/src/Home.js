import React from 'react'
import {Row, Col } from 'react-bootstrap'

function Home()
{
  return (

   <>
    <div>

         <img height={100} src='https://c.ndtvimg.com/2022-01/0d2m0qkg_car_625x300_12_January_22.jpg'></img><br/><br/>
          THIS HOME PAGE 

    </div> <br/>

    <div>
        HELLO REACT BOOTSTRAP
    </div> <br/>

   <Row>
    <Col className='bg-success' lg={1}> col 1</Col>
    <Col className='bg-danger' lg={8}> col 2</Col>
    <Col className='bg-secondary' lg={3}> col 3</Col>
   </Row><br/>

   <div className='row'>
    <div className='bg-warning col-lg-1'>card 1</div>
    <div className='bg-primary col-lg-8'>card 2</div>
    <div className='bg-success col-lg-3'>card 3</div>
   </div>
   
   </>

  )
}

export default Home 