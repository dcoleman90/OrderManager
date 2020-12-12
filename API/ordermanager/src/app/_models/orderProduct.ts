export class OrderProduct {
  orderId: number;
  productId: number;
  quantity: number;

  constructor(_orderId: number, _productId: number, _quantity: number) {
    this.orderId = _orderId;
    this.productId = _productId;
    this.quantity = _quantity;
  }
}
