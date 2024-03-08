import express from 'express';
import ClientesController from '../controllers/clientes.controller';

const clientesController = new ClientesController();
 
const router = express.Router();
 
router.post('/', clientesController.createClientes);
router.get('/', clientesController.getClientes);
router.get('/calc', clientesController.rota);
router.get('/:id', clientesController.getOneClientes);
router.put('/:id', clientesController.updateClientes);
 
export default router;