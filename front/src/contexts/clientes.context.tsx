import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { ClientesHooks } from "../hooks/clietes.hook";
import { ClienteProps, ErrorProps, GetClientesProps, GetOneClientesProps, PostClienteProps, RestClienteProps, SetClieteFieldProps } from "../types/cliente.type";

type GlobalAlertContextType = {
    getClientes: GetClientesProps,
    getOneCliente: GetOneClientesProps
    clientes: ClienteProps[],
    setClieteField: SetClieteFieldProps
    cliente: ClienteProps
    restCliente: RestClienteProps
    postCliente: PostClienteProps
    putCliente: PostClienteProps
    errorCl: ErrorProps,
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    calcRota: GetClientesProps
    rota: ClienteProps[]
}

export const ClienteContext = createContext<GlobalAlertContextType>(null!)

export function ClienteProvider({ children }: { children: ReactNode }) {
    const clientesHooks = ClientesHooks()

    return (
        <ClienteContext.Provider value={{ ...clientesHooks }}>
            {children}
        </ClienteContext.Provider>
    )

}