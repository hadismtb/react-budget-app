import React, { useRef } from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useBudgets} from "../context/BudgetContext";

const AddBudgetModal = ({ show, handleClose }) => {
    const { addBudget } = useBudgets();

    const nameRef = useRef();
    const maxRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const max = parseFloat(maxRef.current.value);

        if (name.trim()){
            addBudget({name, max});
        }

        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title className="ms-auto">بودجه جدید</Modal.Title>
                    <Button type="button" className="btn-close mx-0" aria-label="Close" onClick={handleClose}></Button>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>عنوان</Form.Label>
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>حداکثر مخارج</Form.Label>
                        <Form.Control placeholder="مبلغ به تومان " ref={maxRef} type="number" min={0} step={.01} required/>
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