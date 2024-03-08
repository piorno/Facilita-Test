import { Box, Button, Card, CardHeader, Grid, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ClienteContext } from "../../contexts/clientes.context";
import { useContext } from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "900",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
    flexGrow: 1,
};

export default function ModalRotas({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    const { rota } = useContext(ClienteContext);
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
                        title="Rota"
                        action={
                            <Button onClick={handleClose} sx={{color: "black"}}>X</Button>
                        }
                    />
                    <Grid container spacing={2} sx={{ width: "100%" }} paddingLeft={4} paddingBottom={4}>
                        {/* <Grid item xs={12} sx={{ width: "100%" }}> */}
                            <TableContainer>
                                <Table sx={{ width: "100%" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell align="right">Nome</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Telefone</TableCell>
                                            <TableCell align="right">X</TableCell>
                                            <TableCell align="right">Y</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rota.map(row => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="right">{row.nome}</TableCell>
                                                <TableCell align="right">{row.email}</TableCell>
                                                <TableCell align="right">{row.telefone}</TableCell>
                                                <TableCell align="right">{row.x}</TableCell>
                                                <TableCell align="right">{row.y}</TableCell>
                                            </TableRow>

                                        ))}

                                    </TableBody>
                                </Table>

                            </TableContainer>
                        {/* </Grid> */}
                    </Grid>
                </Card>
            </Box>
        </Modal>
    )

}