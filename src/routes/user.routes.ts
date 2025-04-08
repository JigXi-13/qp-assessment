import { Router } from 'express';
import {
    viewAvailableGroceryItems,
    placeOrder
} from '../controllers/user.controller';

const router = Router();

router.get('/groceries', viewAvailableGroceryItems);
router.post('/order', placeOrder)

export default router;
