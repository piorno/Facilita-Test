import { GlobalAlertContext } from '../contexts/global.context';
import { api } from '../services/api'
import { useContext, useState } from "react"; 3
import { ClienteProps, ErrorProps, GetClientesProps, GetOneClientesProps, PostClienteProps, RestClienteProps, SetClieteFieldProps } from '../types/cliente.type';

export function ClientesHooks() {
    const { handleToast, handleLoading } = useContext(GlobalAlertContext);
    const [clientes, setClientes] = useState<ClienteProps[]>([])
    const [rota, setRota] = useState<ClienteProps[]>([])
    const [cliente, setCliente] = useState<ClienteProps>({ nome: "", email: "", telefone: "" })
    const [errorCl, setErrorCl] = useState<ErrorProps>({ nome: { error: false, text: "" }, email: { error: false, text: "" }, telefone: { error: false, text: "" } })
    const [open, setOpen] = useState<boolean>(false);

    const getClientes: GetClientesProps = async () => {
        handleLoading(true)

        const { data } = await api({ method: 'get', url: `/clientes` })
        setClientes(data)

        handleLoading(false)
    }

    const getOneCliente: GetOneClientesProps = async (id) => {
        handleLoading(true)

        const { data } = await api({ method: 'get', url: `/clientes/${id}` })
        setCliente(data)

        handleLoading(false)
    }

    const setClieteField: SetClieteFieldProps = (value, field) => {
        let cl = { ...cliente }
        cl[field] = value
        setCliente(cl)
    }

    const restCliente: RestClienteProps = () => {
        setCliente({ id: 0, nome: "", email: "", telefone: "" })
    }

    const postCliente: PostClienteProps = async () => {
        handleLoading(true)
        setErrorCl({ nome: { error: false, text: "" }, email: { error: false, text: "" }, telefone: { error: false, text: "" } })
        const response = await api({ method: 'post', url: `/clientes`, data: cliente })
        if (response.status == 400) {
            response.data.map(async (res: any) => {
                console.log(errorCl);
                let cl = errorCl

                cl[res.field as keyof ErrorProps].error = true
                cl[res.field as keyof ErrorProps].text = res.message

                setErrorCl(cl)
            })
        }
        if (response.status == 201) {
            handleToast(true, "success", "Cliente Salvo com Sucesso")
            setOpen(false)
        }
        getClientes()
        handleLoading(false)
    }

    const putCliente: PostClienteProps = async () => {
        handleLoading(true)
        setErrorCl({ nome: { error: false, text: "" }, email: { error: false, text: "" }, telefone: { error: false, text: "" } })
        const response = await api({ method: 'put', url: `/clientes/${cliente.id}`, data: cliente })
        if (response.status == 400) {
            response.data.map(async (res: any) => {
                console.log(errorCl);
                let cl = errorCl

                cl[res.field as keyof ErrorProps].error = true
                cl[res.field as keyof ErrorProps].text = res.message

                setErrorCl(cl)
            })
        }
        if (response.status == 200) {
            handleToast(true, "success", "Cliente Salvo com Sucesso")
            setOpen(false)
        }
        getClientes()
        handleLoading(false)
    }

    const calcRota: GetClientesProps = async () => {
        handleLoading(true)

        const { data } = await api({ method: 'get', url: `/clientes/calc` })
        setRota(data)

        handleLoading(false)
    }

    return ({
        getClientes,
        getOneCliente,
        clientes,
        setClieteField,
        cliente,
        restCliente,
        postCliente,
        putCliente,
        errorCl,
        open,
        setOpen,
        calcRota,
        rota
    })

}