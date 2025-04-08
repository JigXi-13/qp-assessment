import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';
import { GroceryItem } from '../models/GroceryItem';
import { CreateOrderInput } from '../types/order';

export const createOrder = async (data: CreateOrderInput) => {
    
  const { userId, items } = data;

  const order = await Order.create({ userId });

  for (const item of items) {
    const grocery = await GroceryItem.findByPk(item.groceryItemId);

    if (!grocery) throw new Error(`Item ID ${item.groceryItemId} not found.`);
    if (grocery.quantity < item.quantity) {
      throw new Error(`Insufficient stock for item: ${grocery.name}`);
    }

    // Create order item
    await OrderItem.create({
      orderId: order.id,
      groceryItemId: item.groceryItemId,
      quantity: item.quantity,
      unitPrice: grocery.price,
      totalPrice: grocery.price * item.quantity,
    });

    // Decrement stock for managing inventory levels
    grocery.quantity -= item.quantity;
    await grocery.save();
  }

  return order;
};
