import Button from 'react-bootstrap/Button';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import "./Modal.css"
import { useState } from 'react';

function MyVerticallyCenteredModal(props) {
  const [task, settask] = useState("")
   const [completionDate, setcompletionDate] = useState("")
   const [progress, setProgress] = useState("")
  const SubmitHandler = () => {
    console.log(task,completionDate,progress)
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Row>
            <Col md="6"><Form.Control type="text"
             placeholder='Enter your task name' onChange={(e)=> settask(e.target.value) } />
            </Col>
            <Col md="6"><Form.Control type="text" placeholder='Enter Completion date'
             onChange={(e)=> setcompletionDate(e.target.value)}  /></Col>
          </Row>
        </Modal.Title> 
      </Modal.Header>
      <Modal.Body style={{ display: "flex" }}>
        <textarea name="subject" id="subject" cols="90" rows="6"
          placeholder='Write your progress' style={{ borderStyle: "hidden" }} 
          onChange={(e)=> setProgress(e.target.value)}></textarea>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='danger' onClick={props.onHide  }>Close</Button>
      <Button variant='success' onClick={()=> SubmitHandler()}>submit</Button>
     
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal