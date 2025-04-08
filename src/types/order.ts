export interface OrderItemInput {
    groceryItemId: number;
    quantity: number;
  }
  
  export interface CreateOrderInput {
    userId: number;
    items: OrderItemInput[];
  }
  