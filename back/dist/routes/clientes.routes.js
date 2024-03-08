"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_controller_1 = __importDefault(require("../controllers/clientes.controller"));
const clientesController = new clientes_controller_1.default();
const router = express_1.default.Router();
router.post('/', clientesController.createClientes);
router.get('/', clientesController.getClientes);
router.get('/calc', clientesController.teste);
router.get('/:id', clientesController.getOneClientes);
router.put('/:id', clientesController.updateClientes);
exports.default = router;
