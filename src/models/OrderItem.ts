import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Order } from './Order';
import { GroceryItem } from './GroceryItem';

@Table({ tableName: 'order_items', timestamps: false })
export class OrderItem extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER })
  orderId!: number;

  @ForeignKey(() => GroceryItem)
  @Column({ type: DataType.INTEGER })
  groceryItemId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  unitPrice!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  totalPrice!: number;
}
