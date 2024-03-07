import { ReactNode, createContext } from "react";
import { ClientesHooks } from "../hooks/clietes.hook";
import { ClienteProps, GetClientesProps, GetOneClientesProps } from "../types/cliente.type";

type GlobalAlertContextType ={
    getClientes: GetClientesProps,
    getOneCliente: GetOneClientesProps
    clientes: ClienteProps[]
}

export const ClienteContext = createContext<GlobalAlertContextType>(null!)

export function ClienteProvider({ children }: {children: ReactNode}) {
    const {getClientes, getOneCliente, clientes} = ClientesHooks()

    return (
        <ClienteContext.Provider value={{ getClientes, getOneCliente, clientes }}>
            { children }
        </ClienteContext.Provider>
    )

}