import { GlobalAlertContext } from '../contexts/global.context';
import { api } from '../services/api'
import { useContext, useState } from "react"; 3
import { ClienteProps } from '../types/cliente.type';

export function ClientesHooks() {
    const { handleToast, handleLoading } = useContext(GlobalAlertContext);
    const [clientes, setClientes] = useState<ClienteProps[]>([])

    const getClientes = async () => {
        handleLoading(true)

        const { data } = await api({ method: 'get', url: `/clientes` })
        setClientes(data)
        // setResult({ error: false, value: data.result, errorText: 'Error' })

        handleLoading(false)
    }

    const getOneCliente = async (id: number) => {
        handleLoading(true)

        const { data } = await api({ method: 'get', url: `/clientes/${id}` })
        console.log(data);
        // setResult({ error: false, value: data.result, errorText: 'Error' })

        handleLoading(false)
    }

    return ({
        getClientes,
        getOneCliente,
        clientes
    })

}