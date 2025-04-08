import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { GroceryItem } from '../models/GroceryItem';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  models: [User, GroceryItem, Order, OrderItem],
  logging: false,
});

export default sequelize;
