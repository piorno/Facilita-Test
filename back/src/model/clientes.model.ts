import pool from '../config/database';
import { Cliente } from '../types/cliente.type';

export default class ClientesModel {
    async insertCliente(cliente: Cliente) {
        const clienteExist = await pool.query("SELECT nome, email, telefone FROM tb_clientes where nome = $1 and email = $2 and telefone = $3", [cliente.nome, cliente.email, cliente.telefone])
            .catch(err => console.error(err))
        if (clienteExist?.rowCount && clienteExist?.rowCount > 0) throw new Error("Cliente con essas credenciais já existe");

        const insert = await pool.query("INSERT INTO tb_clientes (nome, email, telefone) values ($1, $2, $3) RETURNING id", [cliente.nome, cliente.email, cliente.telefone])
            .catch(err => console.error(err))
        return insert
    }

    async selectClientes() {
        const clientes = await pool.query("SELECT nome, email, telefone FROM tb_clientes ORDER BY id")
            .catch(err => console.error(err))
        return clientes?.rows
    }

    async selectOneClient(id: number) {
        const cliente = await pool.query("SELECT nome, email, telefone FROM tb_clientes where id = $1", [id])
            .catch(err => console.error(err))

        if (cliente?.rowCount == 0) throw new Error("Cliente não encontrado");

        return cliente?.rows[0]
    }

    async updateCliente(cliente: Cliente) {
        const clienteExist = await pool.query(
            "SELECT nome, email, telefone FROM tb_clientes where nome = $1 and email = $2 and telefone = $3 and id != $4",
            [cliente.nome, cliente.email, cliente.telefone, cliente.id])
            .catch(err => console.error(err)
            )
        console.log(clienteExist?.rowCount);


        if (clienteExist?.rowCount && clienteExist?.rowCount > 0) throw new Error("Cliente con essas credenciais já existe");

        const insert = await pool.query("UPDATE tb_clientes SET nome = $1, email = $2, telefone = $3 WHERE id = $4", [cliente.nome, cliente.email, cliente.telefone, cliente.id])
            .catch(err => console.error(err))
        return insert
    }
}