import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../App.css';
import useStore from "../store";
import ACTION_TYPES from "../store/actionTypes";
import {MESSAGES, ROUTE_PATHS} from "../common/consts";
import { useHistory } from 'react-router-dom'

function CustomersList() {

    const [appData, dispatch] = useStore();
    const history = useHistory();

    function handleRemoveCustomer(customerId) {
        dispatch({ type: ACTION_TYPES.REMOVE_CUSTOMER, customerId });
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell >id</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {appData.customers.map((row) => {
                        return (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.name}</TableCell>
                                <TableCell >
                                    <Button variant="contained" onClick={() => {
                                        history.push(`${ROUTE_PATHS.INVOICE_PAGE}/${row.id}`);
                                    }}>
                                        {MESSAGES.CREATE_INVOICE}
                                    </Button>
                                </TableCell>
                                <TableCell >
                                    <Button variant="contained" onClick={() => handleRemoveCustomer(row.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomersList;
