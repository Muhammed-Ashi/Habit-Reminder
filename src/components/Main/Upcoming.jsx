import React from 'react'
import { Accordion,Col ,Badge, Row } from 'react-bootstrap'

function Upcoming() {
  return (
  <Row style={{display:"flex"}}>
<Col md= "12">
      <Accordion defaultActiveKey="0"  flush >
        <Accordion.Item eventKey="0"  >
          <Accordion.Header    ><h5 style={{ color: "red" }}>Upcoming-remider</h5></Accordion.Header>
          <Accordion.Body>
           
            <span> <Badge pill bg="success">
              Upcoming
            </Badge>{' study mongodb'}</span>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>


   </Col>
   </Row>  
  )
}

export default Upcoming