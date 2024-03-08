import { useContext, useEffect, useState } from "react";
import { ClienteContext } from "../../contexts/clientes.context";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import ModalClientes from "./modal";
import { Button, Grid } from "@mui/material";
import ModalRotas from "./modalRota";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 150, type: "number" },
    { field: 'nome', headerName: 'Nome', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'telefone', headerName: 'Telefone', width: 150 },
    { field: 'telefone', headerName: 'Telefone', width: 150 },
    { field: 'x', headerName: 'X', width: 150 },
    { field: 'y', headerName: 'Y', width: 150 },
];

export default function Clientes() {
    const { getClientes, clientes, getOneCliente, restCliente, open, setOpen, calcRota } = useContext(ClienteContext);

    const [update, setUpdate] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        getClientes()
    }, [])

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1>Clientes</h1>
            </Grid>
            <Grid item xs={6}>

                <Button onClick={() => { restCliente(); setUpdate(false); setOpen(true) }}>Criar cliente</Button>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
                <Button onClick={() => { calcRota(); setModal(true) }}>Calcular rota</Button>

            </Grid>
            <DataGrid
                columns={columns}
                rows={clientes}
                slots={{ toolbar: GridToolbar }}
                onRowClick={(row) => {
                    getOneCliente(Number(row.id));
                    setUpdate(true);
                    setOpen(true);
                }}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
            >
            </DataGrid>
            <ModalClientes open={open} update={update} handleClose={() => setOpen(false)} />
            <ModalRotas open={modal}  handleClose={() => setModal(false)} />
        </Grid>

    )

}