import React from 'react'
import { Row,Col,Container,Button,Card ,ListGroup} from 'react-bootstrap'
import Clock from './Clock'
import Upcoming from './Upcoming'
import { IoAddOutline } from "react-icons/io5";
import Task from './Task';
import './MainScreen.css'
import { AiFillEdit,AiTwotoneDelete } from "react-icons/ai";
import {Link} from "react-router-dom"
import Setalaram from './set_alarm/Setalaram';
import { useState } from 'react';

function MainScreen() {
  const [modalShow, setModalShow] = useState(false)
  return (
    <Container style={{marginTop:"15px",display:"",}}>
      <Row>
        <Col  md='5'><Clock/></Col>
        <Col md= '6' style={{marginTop:"10px"}}><Upcoming/></Col>
      </Row>
      <Row>

      
      </Row>
      <Row>
     <Col  md="10"   style={{marginTop:"50px"}}>
   <div   style={{overflowX:'scroll',backgroundColor:"#00997a",display:"flex",justifyContent:"center",borderRadius:"10px"}}>
 <div style={{display:'flex'}}>
   <Card className='card'  >
        <Card.Header ><h5>Taskname</h5></Card.Header>
        <Card.Body>
        
          <Card.Text>
              <h4>3:35</h4>
          </Card.Text>
        </Card.Body>
         <div className='edit_button'>
          <Button variant='success'  ><AiFillEdit></AiFillEdit></Button><Button variant='danger' style={{marginLeft:"3px"}}><AiTwotoneDelete></AiTwotoneDelete></Button>
         </div>
      </Card>
      </div>
    
      <div style={{display:'flex'}}>
   <Card className='card'  >
        <Card.Header ><h5>Taskname</h5></Card.Header>
        <Card.Body>
        
          <Card.Text>
              <h4>3:35</h4>
          </Card.Text>
        </Card.Body>
         <div className='edit_button'>
          <Button variant='success'  ><AiFillEdit></AiFillEdit></Button><Button variant='danger' style={{marginLeft:"3px"}}><AiTwotoneDelete></AiTwotoneDelete></Button>
         </div>
      </Card>
      </div>
      
   </div>
     </Col>

 
      <Col  md="1" style={{marginTop:"100px",cursor:"pointer",display:'flex'}}>
        <div className='add_button_container'> 

   <Link className='Add_Button' onClick={()=>setModalShow( true)}> <IoAddOutline style={{color:'white',marginTop:"9px"}}></IoAddOutline></Link> 
   <Setalaram show={modalShow} onHide={()=>setModalShow(false)} /> 
   </div>
   
        
        </Col>
      </Row>
      <Row>
        <Col md="12" style={{display:"flex",justifyContent:"center"}}><h1>Your Task</h1><hr /></Col>
      </Row>
      <Row>
        
          <Col md='12'style={{display:"flex",justifyContent:"center"}}>
        <Task/>
          </Col>
        
      </Row>
      </Container>
  )
}

export default MainScreen