import { OrdersService } from './../../../Services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  constructor(private orderService: OrdersService) {}
  searchTerm = '';
  orders = [
    {
      id: 564,
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'SELL STOP',
      condition: 'over',
      conditionValue1: 2,
      conditionValue2: undefined,
      price: 150,
      SL: 200,
      TP: 0,
      lot: 0,
      creator: 0,
      validator: 0,
      state: 'pending',
      capital: 12,
      percentage: 12,
    },
    {
      id: 564,
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'SELL STOP',
      condition: 'over',
      conditionValue1: 2,
      conditionValue2: undefined,
      price: 150,
      SL: 200,
      TP: 0,
      lot: 0,
      creator: 0,
      validator: 0,
      state: 'pending',
      capital: 12,
      percentage: 12,
    },
    {
      id: 564,
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'SELL STOP',
      condition: 'over',
      conditionValue1: 2,
      conditionValue2: undefined,
      price: 150,
      SL: 200,
      TP: 0,
      lot: 0,
      creator: 0,
      validator: 0,
      state: 'pending',
      capital: 12,
      percentage: 12,
    },
  ];
  getOrders() {
    this.orderService.getMyOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }
  ngOnInit(): void {
    this.getOrders();
  }
  search() {
    if (this.searchTerm.length === 0) this.getOrders();
    this.orderService.searchMyOrders(this.searchTerm).subscribe((data: any) => {
      console.log(data);
      this.orders = data;
    });
  }
  cancelOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe((data) => {
      console.log('deleted', data);
    });
  }
}
