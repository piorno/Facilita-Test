import { useContext, useEffect, useState } from "react";
import { ClienteContext } from "../../contexts/clientes.context";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ModalClientes from "./modal";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 150, type: "number" },
    { field: 'nome', headerName: 'Nome', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'telefone', headerName: 'Telefone', width: 150 },
];

export default function Clientes() {
    const { getClientes, clientes, getOneCliente } = useContext(ClienteContext);

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        getClientes()
    }, [])

    return (
        <>
            <h1>Clientes</h1>
            <DataGrid
                columns={columns}
                rows={clientes}
                onRowClick={(row) => {
                    getOneCliente(Number(row.id)); setOpen(true)
                }}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
            >
            </DataGrid>
            <ModalClientes open={open} handleClose={() => setOpen(false)} />
        </>

    )

}