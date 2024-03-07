import { Box, Card, CardHeader, Grid, Modal, TextField, Typography } from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "600",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
    flexGrow: 1,
};

export default function ModalClientes({ open, handleClose }: { open: boolean, handleClose: () => void }) {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={style}>
                <Card>
                    <CardHeader
                        title="Cliente"
                        action={
                            <>
                                {/* <Button>Cricket</Button>
                                <Button>Football</Button>
                                <Button>Badminton</Button> */}
                            </>
                        }
                    />
                    <Grid container spacing={2} sx={{ width: "100%" }} paddingLeft={4} paddingBottom={4}>
                        {/* 
                            TODO 
                            Placeholders
                            valitade input email
                            salvar
                            criar
                        */}
                        <Grid item xs={12} sx={{ width: "100%" }}>
                            <TextField id="outlined-basic" label="Nome" variant="outlined" sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Telefone" variant="outlined" sx={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Modal>
    )

}