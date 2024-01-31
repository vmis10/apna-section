import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function InspDatesModal(props) {
  const {show, onClose, onSubmit, formData, forwardData} = props;
  const handleSubmit = (e)=>{
    e.preventDefault();
    onClose();
    onSubmit(formData);
  }
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Joint Inspection Dates</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Station/IB/LC</Form.Label>
                <Form.Control type="text" name="ptandcrossing" placeholder="StationIBLC" value={formData.stniblc} onChange={forwardData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Point & Crossing Date</Form.Label>
                <Form.Control type="date" name="ptandcrossing" placeholder="DateRange" value={formData.ptandcrossing} onChange={forwardData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Electrical Gen. Inspection Date</Form.Label>
                <Form.Control type="date" name="electricGen" placeholder="DateRange" value={formData.electricGen} onChange={forwardData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>TRD Inspection Date</Form.Label>
                <Form.Control type="date" name="trd" placeholder="DateRange" value={formData.trd} onChange={forwardData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Track Inspection with PWI Date</Form.Label>
                <Form.Control type="date" name="trackpwi" placeholder="DateRange" value={formData.trackpwi} onChange={forwardData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>SSD Inspection Date</Form.Label>
                <Form.Control type="date" name="ssd" placeholder="DateRange" value={formData.ssd} onChange={forwardData} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Close</Button>
            <Button variant="primary" type="submit" onClick={onClose}>Save</Button>
          </Modal.Footer>
        </Form>  
      </Modal>
    </>
  );
}

export default InspDatesModal;