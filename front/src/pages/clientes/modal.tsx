import { Box, Button, Card, CardHeader, Grid, Modal, TextField } from "@mui/material";
import { ClienteContext } from "../../contexts/clientes.context";
import { useContext } from "react";

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

export default function ModalClientes({ open, handleClose, update }: { open: boolean, handleClose: () => void, update: boolean }) {
    const { cliente, setClieteField, putCliente, postCliente, restCliente, errorCl } = useContext(ClienteContext);
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
                            <Button onClick={handleClose} sx={{ color: "black" }}>X</Button>
                        }
                    />
                    <Grid container spacing={2} sx={{ width: "100%" }} paddingLeft={4} paddingBottom={4}>
                        <Grid item xs={12} sx={{ width: "100%" }}>
                            <TextField id="outlined-basic" label="Nome" variant="outlined" error={errorCl.nome.error} helperText={errorCl.nome.text} onChange={(e) => { setClieteField(e.target.value, "nome") }} value={cliente.nome} sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" error={errorCl.email.error} helperText={errorCl.email.text} onChange={(e) => { setClieteField(e.target.value, "email") }} value={cliente.email} sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Telefone" variant="outlined" error={errorCl.telefone.error} helperText={errorCl.telefone.text} onChange={(e) => { setClieteField(e.target.value, "telefone") }} value={cliente.telefone} sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="X" variant="outlined" error={errorCl.telefone.error} helperText={errorCl.telefone.text} onChange={(e) => { setClieteField(e.target.value, "x") }} value={cliente.x} sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Y" variant="outlined" error={errorCl.telefone.error} helperText={errorCl.telefone.text} onChange={(e) => { setClieteField(e.target.value, "y") }} value={cliente.y} sx={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12}>
                            {update ?
                                <Button onClick={() => { putCliente(); restCliente() }}>Salvar</Button>
                                :
                                <Button onClick={() => { postCliente(); restCliente() }}>Salvar</Button>
                            }
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Modal>
    )

}