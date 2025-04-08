import { Request, Response } from "express";
import { GroceryItem } from "../models/GroceryItem";
import { Op } from "sequelize";

import { createOrder } from "../services/order.service";

// View the list of available grocery items
export const viewAvailableGroceryItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const items = await GroceryItem.findAll({
      where: {
        quantity: { [Op.gt]: 0 },
      },
    });
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Ability to book multiple grocery items in a single order
export const placeOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    // simulating auth here... we need to later add authentication/authorization middleware
    // to get the user id from a token or session
    const userId = parseInt(req.headers["user-id"] as string); 
    const { items } = req.body;

    if (!userId || !items || !Array.isArray(items)) {
      res.status(400).json({ message: "Invalid request payload." });
    }

    const order = await createOrder({ userId, items });
    res
      .status(201)
      .json({ message: "Order placed successfully.", orderId: order.id });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
