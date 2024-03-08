export type ClienteProps = {
    id?: number
    nome: string
    email: string
    telefone: string
    x?: string
    y?: string
}

export type ErrorProps = {
    nome: {error: boolean, text: string}
    email: {error: boolean, text: string}
    telefone: {error: boolean, text: string}
}

export type GetClientesProps = () => void
export type GetOneClientesProps = (id: number) => void
export type RestClienteProps = () => void
export type SetClieteFieldProps = (value: string, field: keyof Omit<ClienteProps, "id">) => void
export type SetErrorFieldProps = (value: boolean, field: keyof ErrorProps, text: string) => void
export type PostClienteProps = () => void