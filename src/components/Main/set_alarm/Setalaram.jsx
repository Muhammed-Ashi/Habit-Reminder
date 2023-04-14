import Button from 'react-bootstrap/Button';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import './set_alarm.css'
import { useState } from 'react';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';


function Setalarm(props) {

  const [value, setvalue] = useState("")
  const [reminder, setreminder] = useState("")

  const SubmitHandler = () => {
    var dt = new Date();
    var hours = dt.getHours(); // gives the value in 24 hours format
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    var minutes = dt.getMinutes();
    var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm;

    console.log(value, "value undo")
    
  }
  return (

    <div >

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen="sm-down"

      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Row >
              <Col md="12"><Form.Control type="text"
                placeholder="Add reminder " onChange={(e) => setreminder(e.target.value)} />
              </Col>
            </Row>
            <Row>

            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex" }} >
          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimeField']}>
                <DateTimeField label="Set date and time"
                  value={value} onChange={(newValue) => setvalue(newValue.$d)} />
              </DemoContainer>
            </LocalizationProvider>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Close</Button>
          <Button variant='success' onClick={() => SubmitHandler()}>submit</Button>

        </Modal.Footer>

      </Modal>
    </div>
  );

}
export default Setalarm