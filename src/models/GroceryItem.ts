import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'grocery_items', timestamps: false })
export class GroceryItem extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity!: number;
}
