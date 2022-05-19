import React from 'react';
import {Button, Card, ProgressBar, Stack} from "react-bootstrap";

// FUNCTIONS
import { formatNumber } from "../helpers/functions";

const BudgetCard = ({data}) => {
    const {name, amount, max} = data;

    const getProgressBarVariant = (amount, max) => {
        const ratio = amount/max;
        if (ratio < .5) {
            return "primary"
        }else if (ratio < .75){
            return "warning"
        }else {
            return "danger "
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className="ms-2">{name}</div>
                    <div className="d-flex align-items-baseline">{formatNumber(max)}<span className="text-muted fs-6 ms-1">/{formatNumber(max)}</span></div>
                </Card.Title>
                <ProgressBar className="rounded-pill" variant={getProgressBarVariant(amount, max)} min={0} max={max} now={amount}/>
                <Stack direction="horizontal" gap="2" className="mt-4 justify-content-end">
                    <Button variant="outline-primary">افزودن هزینه</Button>
                    <Button variant="outline-secondary">مشاهده هزینه‌ها</Button>
                </Stack>
            </Card.Body>
        </Card>
    );
};

export default BudgetCard;