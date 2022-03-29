import React, {useEffect, useState} from 'react';
import '../App.css';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import useStore from "../store";
import calculateInvoices from "../common/Functions";
import {Grid, Typography} from "@mui/material";
import {MESSAGES} from "../common/consts";

function InvoicesList() {

    const [invoices, setInvoices] = useState([]);
    const [appData] = useStore();

    useEffect(() => {
        setInvoices(calculateInvoices(appData.packages))
    }, [appData.packages]);

    return (
        <Grid container alignItems='center' rowSpacing={4} direction='column'>
            <Grid item>
                <Typography variant="h6">
                    {MESSAGES.INVOICES_TITLE}
                </Typography>
            </Grid>
            <Grid item>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {MESSAGES.INVOICES_CELLS.map( cell =>
                                    <TableCell>{cell}</TableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoices?.length && invoices.map((row) => {
                                return (
                                    <TableRow
                                        key={row.customerId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.customerId}
                                        </TableCell>
                                        <TableCell >{row.totalWeight}</TableCell>
                                        <TableCell >{row.totalPrice}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default InvoicesList;
