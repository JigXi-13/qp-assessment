import { Request, Response } from 'express';
import { GroceryItem } from '../models/GroceryItem';

// Add a new grocery item
export const addGroceryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, quantity } = req.body;

    const newItem = await GroceryItem.create({ name, price, quantity });

    res.status(201).json({ message: 'Grocery item added successfully', item: newItem });
  } catch (error) {
    console.error('Error adding grocery item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// View esisting grocery items
export const getAllGroceryItems = async (_req: Request, res: Response): Promise<void> => {
  try {
    const items = await GroceryItem.findAll();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update details (e.g., name, price) of existing grocery items
export const updateGroceryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const item = await GroceryItem.findByPk(id);

    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    item.name = name ?? item.name;
    item.price = price ?? item.price;
    item.quantity = quantity ?? item.quantity;

    await item.save();

    res.status(200).json({ message: 'Item updated successfully', item });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Remove grocery items from the system
export const deleteGroceryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const item = await GroceryItem.findByPk(id);

    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    await item.destroy();

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Manage inventory levels of grocery items
export const updateInventory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const item = await GroceryItem.findByPk(id);

    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    item.quantity = quantity;
    await item.save();

    res.status(200).json({ message: 'Inventory updated successfully', item });
  } catch (error) {
    console.error('Error updating inventory:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
