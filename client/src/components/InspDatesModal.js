import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function InspDatesModal(props) {
    const [validated, setValidated] = useState(false);

    const handleValidation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            props.handleSubmit(event);
        }
        setValidated(true);
    };
  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Form noValidate validated={validated} onSubmit={handleValidation}>
            <Modal.Header closeButton>
              <Modal.Title>Joint Inspection Dates</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="stniblc">
                <Form.Label>Station/IB/LC</Form.Label>
                <Form.Control type="text" required name="stniblc" placeholder="Station name" value={props.rest.stniblc} onChange={props.handleOnChange} />
                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ptandcrossing">
                <Form.Label>Point & Crossing Date</Form.Label>
                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
                <Form.Control type="date" name="ptandcrossing" placeholder="DateRange" value={props.rest.ptandcrossing} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="electricGen">
                <Form.Label>Electrical Gen. Inspection Date</Form.Label>
                <Form.Control type="date" name="electricGen" placeholder="DateRange" value={props.rest.electricGen} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="trd">
                <Form.Label>TRD Inspection Date</Form.Label>
                <Form.Control type="date" name="trd" placeholder="DateRange" value={props.rest.trd} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="trackpwi">
                <Form.Label>Track Inspection with PWI Date</Form.Label>
                <Form.Control type="date" name="trackpwi" placeholder="DateRange" value={props.rest.trackpwi} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ssd">
                <Form.Label>SSD Inspection Date</Form.Label>
                <Form.Control type="date" name="ssd" placeholder="DateRange" value={props.rest.ssd} onChange={props.handleOnChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>Close</Button>
            <Button variant="primary" type="submit">Save</Button>
          </Modal.Footer>
        </Form>  
      </Modal>
    </>
  );
}

export default InspDatesModal;