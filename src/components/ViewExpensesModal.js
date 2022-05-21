import React from 'react';
import {Button, Modal, Stack} from "react-bootstrap";
import {UNCATEGORIZED_BUDGET_ID, useBudgets} from "../context/BudgetContext";
import { formatNumber } from '../helpers/functions';

const ViewExpensesModal = ({ budgetId, handleClose, defaultBudgetId }) => {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();

    const budget = budgetId === UNCATEGORIZED_BUDGET_ID ? {id: UNCATEGORIZED_BUDGET_ID, name: "دسته‌بندی نشده"} : budgets.find(budget => budget.id == budgetId);

    const expenses = getBudgetExpenses(budgetId);

    return (
        <Modal show={budgetId} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="ms-auto">
                    <Stack direction="horizontal" gap="2">
                        <div>هزینه‌ها - {budget?.name}</div>
                        {
                            budgetId !==  "دسته بندی نشده" && <Button onClick={() => {
                                deleteBudget(budget);
                                handleClose();
                            }} variant='outline-danger'>حذف</Button>
                        }
                    </Stack>
                </Modal.Title>
                <Button type="button" className="btn-close mx-0" aria-label="Close" onClick={handleClose}></Button>
            </Modal.Header>
            <Modal.Body>
                <Stack direction='vertical' gap="3">
                    {
                        expenses.map(expense => (
                            <Stack key={expense.id} direction="horizontal" gap="2">
                                <div className='ms-auto fs-4'>{expense.description}</div>
                                <div className='fs-5'>{formatNumber(expense.amount)}</div>
                                <Button variant='outline-danger' size='sm' onClick={() => deleteExpense(expense)}>&times;</Button>
                            </Stack>
                        ))
                    }
                </Stack>
            </Modal.Body>
        </Modal>
    );
};

export default ViewExpensesModal;