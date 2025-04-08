import { Router } from 'express';
import {
  addGroceryItem,
  getAllGroceryItems,
  updateGroceryItem,
  deleteGroceryItem,
  updateInventory
} from '../controllers/admin.controller';
import { isAdmin } from '../middlewares/role.middleware';

const router = Router();

router.post('/grocery', isAdmin, addGroceryItem);
router.get('/grocery', isAdmin, getAllGroceryItems);
router.put('/grocery/:id', isAdmin, updateGroceryItem);
router.delete('/grocery/:id', isAdmin, deleteGroceryItem);
router.patch('/grocery/:id/inventory', isAdmin, updateInventory);

export default router;
