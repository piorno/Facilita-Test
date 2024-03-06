import { Request, Response } from 'express';
import { Cliente } from '../types/cliente.type';
import ClientesModel from '../model/clientes.model';

const clienteDb = new ClientesModel()

export default class ClientesController {
    async createClientes(req: Request, res: Response) {
        let err: { message: string, field: string }[] = []
        try {
            const cliente: Cliente = req.body
            if (!cliente.nome) err.push({ message: "nome precisa estar preenchido", field: "nome" })
            if (!cliente.email) err.push({ message: "email precisa estar preenchido", field: "email" })
            if (!cliente.telefone) err.push({ message: "telefone precisa estar preenchido", field: "telefone" })
            if (err.length > 0) return res.status(400).send(err)
            await clienteDb.insertCliente(cliente);
            return res.status(201).send('foi')

        } catch (error: any) {            
            return res.status(400).send(error.message)
        }

    }

    async getClientes(req: Request, res: Response) {
        const clientes = await clienteDb.selectClientes();
        
        return res.status(200).send(clientes)
    }
    
    async getOneClientes(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const cliente = await clienteDb.selectOneClient(id);
            
            return res.status(200).send(cliente)
        } catch (error: any) {
            console.log('dsckjvg');
            
            return res.status(404).send(error.message)
        }
    }

    async updateClientes(req: Request, res: Response) {
        let err: { message: string, field: string }[] = []
        try {
            const cliente: Cliente = {id: Number(req.params.id), ...req.body}

            if (!cliente.nome) err.push({ message: "nome precisa estar preenchido", field: "nome" })
            if (!cliente.email) err.push({ message: "email precisa estar preenchido", field: "email" })
            if (!cliente.telefone) err.push({ message: "telefone precisa estar preenchido", field: "telefone" })
            if (err.length > 0) return res.status(400).send(err)
            await clienteDb.updateCliente(cliente);
            return res.status(201).send('foi')

        } catch (error: any) {            
            return res.status(400).send(error.message)
        }

    }
    
}