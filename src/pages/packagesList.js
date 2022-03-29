import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
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
import AddPackageModal from "../components/AddPackageModal";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {getCustomerNameById} from "../common/Functions";

function PackagesList() {

    const [appData, dispatch] = useStore();
    const [openModal, setOpenModal] = useState(false);

    function handleRemovePackage(packageId) {
        dispatch({ type: ACTION_TYPES.REMOVE_PACKAGE, packageId });
    }

    function handleAddPackage(packageData) {
        dispatch({ type: ACTION_TYPES.ADD_PACKAGE, packageData });
        setOpenModal(false);
    }

    function updatePackages(packages, firstIndex, secondIndex) {
        if(firstIndex < packages.length && secondIndex < packages.length) {
            packages[firstIndex] = packages.splice(secondIndex, 1, packages[firstIndex])[0];
            dispatch({ type: ACTION_TYPES.SET_PACKAGES, packages });
        }
    }

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell sortDirection='asc'>
                                Shipping Order
                            </TableCell>

                            <TableCell>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => setOpenModal(true)}
                                >
                                    <AddIcon />
                                </IconButton></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appData.packages.map((row, index) => {

                            return (
                                <TableRow key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell >{row.weight}</TableCell>
                                    <TableCell >{getCustomerNameById(appData.customers, row.customerId)}</TableCell>
                                    <TableCell >{row.price}</TableCell>
                                    <TableCell >{row.shippingOrder}</TableCell>
                                    <TableCell >
                                        <Button variant="contained" onClick={() => handleRemovePackage(row.id)}>Delete</Button>
                                        <IconButton onClick={() => updatePackages(appData.packages, index, index+1)}>
                                            <ArrowDownwardIcon />
                                        </IconButton>
                                        <IconButton onClick={() => updatePackages(appData.packages, index, index-1)}>
                                            <ArrowUpwardIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddPackageModal openModal={openModal} setOpenModal={setOpenModal} handleAddPackage={(newPackage) => handleAddPackage(newPackage)} />
        </React.Fragment>
    );
}

export default PackagesList;
