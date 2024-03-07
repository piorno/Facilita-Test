export type ClienteProps = {
    nome: string 
    email: string
    telefone: string
}

export type GetClientesProps = () => void
export type GetOneClientesProps = (id: number) => void