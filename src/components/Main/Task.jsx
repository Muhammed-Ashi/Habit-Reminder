import React, { useState } from 'react'
import { Accordion, Badge, Button, Row, Col, Modal,Form } from 'react-bootstrap'
import MyVerticallyCenteredModal from './Model'
import {BsFillPencilFill} from "react-icons/bs"
function Task() {
    const [modalShow, setModalShow] = useState(false)
    return (
        <div style={{ width: "80%", marginTop: "10px", }}>
            <Row style={{display:"flex"}}>
                <Col md='12'>
      
              <Form.Control type="text" placeholder='Add new task' onClick={()=> setModalShow(true)}/>


      <MyVerticallyCenteredModal
    show={modalShow} 
        onHide={() => setModalShow(false)}
      />

                </Col>
            </Row>

            <Accordion defaultActiveKey="1" style={{marginTop:"10px"}} >
                <Accordion.Item eventKey="0">
                    <Accordion.Header  ><h3 style={{ color: 'red' }}>i want to be that </h3> </Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: "flex", justifyContent: "space-between" }}> <h2>04/04/2023</h2> <div style={{ display: "flex", justifyContent: "space-between" }}><Button variant='success'>Edit</Button> <Button variant='danger'>Delete</Button></div>  </div>
                        <span>
                            <hr />
                            <h6>Write your progress</h6>
                            <hr />
                            <Badge pill bg="success">

                            </Badge>{' study mongodb'}</span>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header  ><h3 style={{ color: 'red' }}>i want to heal my self</h3> </Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: "flex", justifyContent: "space-between" }}> <h2>04/04/2023</h2> <div style={{ display: "flex", justifyContent: "space-between" }}><Button variant=''>Edit</Button> <Button>Delete</Button></div>  </div>
                        <span>
                            <hr />
                            <h6>Write your progress</h6>
                            <hr />
                            <Badge pill bg="success">

                            </Badge>{' study mongodb'}</span>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}

export default Task