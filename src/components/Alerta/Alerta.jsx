import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import svgImage from "./spiderman-pulgar.jpg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

export default function Alerta({ purchaseID }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
               // onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={style}>
                    <h3>Gracias por su compra!!</h3>
                    <Stack sx={{ width: '100%', marginBottom:'10px' }} spacing={2}>
                        <Alert severity="success">  su id de transaccion es: {purchaseID}</Alert>
                    </Stack>
                    <img src={svgImage} alt="Logo" />
                <Link to={`/`} className="nav-link">
                        <button variant="contained">
                        Continuar
                        </button>
                </Link>
                </Box>
            </Modal>

        </div>
    );
}




