import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import React from "react";

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type AlertProps = {
    type: string,
    open: boolean,
    message: string,
    handleClose: () => void
}

export default function Toast({ type, open, message, handleClose }: AlertProps) {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}