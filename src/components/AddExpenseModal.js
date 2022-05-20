import React, { useRef } from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useBudgets} from "../context/BudgetContext";

const AddBudgetModal = ({ show, handleClose, defaultBudgetId }) => {
    const { addExpense, budgets } = useBudgets();

    const descRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const description = descRef.current.value;
        const amount = parseFloat(amountRef.current.value);
        const budgetId = budgetIdRef.current.value;

        if (description.trim()){
            addExpense({description, amount, budgetId});
        }

        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title className="ms-auto">هزینه جدید جدید</Modal.Title>
                    <Button type="button" className="btn-close mx-0" aria-label="Close" onClick={handleClose}></Button>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>توضیح</Form.Label>
                        <Form.Control ref={descRef} type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>مبلغ هزینه</Form.Label>
                        <Form.Control placeholder="مبلغ به تومان " ref={amountRef} type="number" min={0} step={.01} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="budgetId">
                        <Form.Label>بودجه</Form.Label>
                        <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                            {
                                budgets.map(budget => {
                                    return(
                                        <option key={budget.id} value={budget.id}>{budget.name}</option>
                                    )
                                })
                            }
                        </Form.Select>
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