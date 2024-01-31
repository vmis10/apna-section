import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function InspDatesModal(props) {
    console.log(props)
  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Form onSubmit={props.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Joint Inspection Dates</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Station/IB/LC</Form.Label>
                <Form.Control type="text" name="stniblc" placeholder="Station name" value={props.rest.stniblc} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Point & Crossing Date</Form.Label>
                <Form.Control type="date" name="ptandcrossing" placeholder="DateRange" value={props.rest.ptandcrossing} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Electrical Gen. Inspection Date</Form.Label>
                <Form.Control type="date" name="electricGen" placeholder="DateRange" value={props.rest.electricGen} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>TRD Inspection Date</Form.Label>
                <Form.Control type="date" name="trd" placeholder="DateRange" value={props.rest.trd} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Track Inspection with PWI Date</Form.Label>
                <Form.Control type="date" name="trackpwi" placeholder="DateRange" value={props.rest.trackpwi} onChange={props.handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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