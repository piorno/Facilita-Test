"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_model_1 = __importDefault(require("../model/clientes.model"));
const clienteDb = new clientes_model_1.default();
class ClientesController {
    createClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let err = [];
            try {
                const cliente = req.body;
                if (!cliente.nome)
                    err.push({ message: "nome precisa estar preenchido", field: "nome" });
                if (!cliente.email)
                    err.push({ message: "email precisa estar preenchido", field: "email" });
                if (!cliente.telefone)
                    err.push({ message: "telefone precisa estar preenchido", field: "telefone" });
                if (err.length > 0)
                    return res.status(400).send(err);
                yield clienteDb.insertCliente(cliente);
                return res.status(201).send('foi');
            }
            catch (error) {
                return res.status(400).send(error.message);
            }
        });
    }
    getClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield clienteDb.selectClientes();
            return res.status(200).send(clientes);
        });
    }
    getOneClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const cliente = yield clienteDb.selectOneClient(id);
                return res.status(200).send(cliente);
            }
            catch (error) {
                console.log('dsckjvg');
                return res.status(404).send(error.message);
            }
        });
    }
    updateClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let err = [];
            try {
                const cliente = Object.assign({ id: Number(req.params.id) }, req.body);
                if (!cliente.nome)
                    err.push({ message: "nome precisa estar preenchido", field: "nome" });
                if (!cliente.email)
                    err.push({ message: "email precisa estar preenchido", field: "email" });
                if (!cliente.telefone)
                    err.push({ message: "telefone precisa estar preenchido", field: "telefone" });
                if (err.length > 0)
                    return res.status(400).send(err);
                yield clienteDb.updateCliente(cliente);
                return res.status(201).send('foi');
            }
            catch (error) {
                return res.status(400).send(error.message);
            }
        });
    }
    teste(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let arr2 = [{ id: 0, x: 0, y: 0, order: 0 }];
            const arr = yield clienteDb.rotas();
            for (let index = 0; index < arr.length; index++) {
                let aux = [];
                arr.map(a => {
                    let x = arr2[index].x == arr2[index].y ? a.x : arr2[index].x < a.x ? Math.abs((a.x - arr2[index].x)) + 1.5 : Math.abs(a.x - arr2[index].x);
                    let y = arr2[index].x == arr2[index].y ? a.y : arr2[index].y < a.y ? Math.abs((a.y - arr2[index].y)) + 1.5 : Math.abs(a.y - arr2[index].y);
                    aux.push(Object.assign(Object.assign({}, a), { distanciaFirst: Math.abs(x + y) }));
                });
                let min = Math.min(...aux.filter(a => !arr2.map(aa => { return aa.id; }).includes(a.id)).map(a => a.distanciaFirst));
                arr2.push(Object.assign(Object.assign({}, aux.find(a => a.distanciaFirst == min && !arr2.map(aa => { return aa.id; }).includes(a.id))), { order: index + 1 }));
            }
            arr2.shift();
            return res.status(200).json(arr2);
        });
    }
}
exports.default = ClientesController;
