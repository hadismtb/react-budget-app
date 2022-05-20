import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const AddBudgetModal = ({ show, handleClose }) => {
    const handleSubmit = event => {
        event.preventDefault();

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title className="ms-auto">بودجه جدید</Modal.Title>
                    <Button type="button" className="btn-close mx-0" aria-label="Close"></Button>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>عنوان</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>حداکثر مخارج</Form.Label>
                        <Form.Control type="number"min={0} step={.01} required/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">افزودن</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    );
};

export default AddBudgetModal;