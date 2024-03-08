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
const database_1 = __importDefault(require("../config/database"));
class ClientesModel {
    insertCliente(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteExist = yield database_1.default.query("SELECT nome, email, telefone FROM tb_clientes where nome = $1 and email = $2 and telefone = $3", [cliente.nome, cliente.email, cliente.telefone])
                .catch(err => console.error(err));
            if ((clienteExist === null || clienteExist === void 0 ? void 0 : clienteExist.rowCount) && (clienteExist === null || clienteExist === void 0 ? void 0 : clienteExist.rowCount) > 0)
                throw new Error("Cliente con essas credenciais já existe");
            const insert = yield database_1.default.query("INSERT INTO tb_clientes (nome, email, telefone, x, y) values ($1, $2, $3, $4, $5) RETURNING id", [cliente.nome, cliente.email, cliente.telefone, cliente.x, cliente.y])
                .catch(err => console.error(err));
            return insert;
        });
    }
    selectClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query("SELECT id, nome, email, telefone, x, y FROM tb_clientes ORDER BY id")
                .catch(err => console.error(err));
            return clientes === null || clientes === void 0 ? void 0 : clientes.rows;
        });
    }
    selectOneClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield database_1.default.query("SELECT id, nome, email, telefone, x, y FROM tb_clientes where id = $1", [id])
                .catch(err => console.error(err));
            if ((cliente === null || cliente === void 0 ? void 0 : cliente.rowCount) == 0)
                throw new Error("Cliente não encontrado");
            return cliente === null || cliente === void 0 ? void 0 : cliente.rows[0];
        });
    }
    updateCliente(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteExist = yield database_1.default.query("SELECT nome, email, telefone FROM tb_clientes where nome = $1 and email = $2 and telefone = $3 and id != $4", [cliente.nome, cliente.email, cliente.telefone, cliente.id])
                .catch(err => console.error(err));
            console.log(clienteExist === null || clienteExist === void 0 ? void 0 : clienteExist.rowCount);
            if ((clienteExist === null || clienteExist === void 0 ? void 0 : clienteExist.rowCount) && (clienteExist === null || clienteExist === void 0 ? void 0 : clienteExist.rowCount) > 0)
                throw new Error("Cliente con essas credenciais já existe");
            const insert = yield database_1.default.query("UPDATE tb_clientes SET nome = $1, email = $2, telefone = $3 WHERE id = $4", [cliente.nome, cliente.email, cliente.telefone, cliente.id])
                .catch(err => console.error(err));
            return insert;
        });
    }
    rotas() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query("SELECT id, nome, email, telefone, x, y, '' as order FROM tb_clientes where x is not null and y is not null")
                .catch(err => console.error(err));
            if ((clientes === null || clientes === void 0 ? void 0 : clientes.rows) && (clientes === null || clientes === void 0 ? void 0 : clientes.rows.length) > 0) {
                return clientes === null || clientes === void 0 ? void 0 : clientes.rows;
            }
            throw new Error("Não a cordenadas cadastradas");
        });
    }
}
exports.default = ClientesModel;
