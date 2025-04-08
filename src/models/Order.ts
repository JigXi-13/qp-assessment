import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'orders', timestamps: false })
export class Order extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId!: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt!: Date;
}
