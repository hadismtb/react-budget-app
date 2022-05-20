import React from 'react';
import {Button, Stack} from "react-bootstrap";

const Header = ({handleAddBudgetModal, handleAddExpenseModal}) => {
    return (
        <Stack direction="horizontal" gap="2" className="my-4">
            <h1 className="ms-auto">بودجه‌ها</h1>
            <Button variant="primary" onClick={handleAddBudgetModal}>افزودن بودجه</Button>
            <Button variant="outline-primary" onClick={handleAddExpenseModal}>افزودن هزینه</Button>
        </Stack>
    );
};

export default Header;