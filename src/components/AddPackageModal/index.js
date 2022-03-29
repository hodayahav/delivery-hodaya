import {Fade, Modal, Select, TextField} from "@mui/material";
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import './styles.css';


export default function AddPackageModal(props) {
    const {openModal, setOpenModal, handleAddPackage} = props;
    let newPackage = {};
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={() => setOpenModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box className='add-package-modal-content' sx={{bgcolor: 'background.paper', p: 4}}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Add Package
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" alignItems='center' flexDirection='row'>
                            <TextField
                                id="id"
                                label="ID"
                                onChange={(event) => newPackage = {...newPackage, id: event.target.value}}
                            />
                            <TextField
                                id="weight"
                                label="Weight"
                                onChange={(event) => newPackage = {...newPackage, weight: event.target.value}}
                            />
                            <TextField
                                id="customerId"
                                label="Customer ID"
                                onChange={(event) => newPackage = {...newPackage, customerId: parseInt(event.target.value)}}
                            />
                            <TextField
                                id="price"
                                label="Price"
                                onChange={(event) => newPackage = {...newPackage, price: event.target.value}}
                            />
                            <TextField
                                id="shippingOrder"
                                label="Shipping Order"
                                onChange={(event) => newPackage = {...newPackage, shippingOrder: event.target.value}}
                            />
                            <Button onClick={() => handleAddPackage(newPackage)}>Add</Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}