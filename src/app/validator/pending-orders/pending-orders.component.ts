import { OrdersService } from './../../Services/orders.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css'],
})
export class PendingOrdersComponent implements OnInit {
  searchTerm = '';
  orders = [
    {
      orderNumber: '564',
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'BUY STOP',
      condition: 'over',
      conditionValue1: 220,
      conditionValue2: null,
      price: 120,
      SL: 100,
      TP: 100,
      lot: 0,
    },
    {
      orderNumber: '564',
      currencyPair: 'AUDJPY',
      orderType: 'marketExecution',
      direction: 'BUY',
      condition: 'between',
      conditionValue1: 220,
      conditionValue2: 130,
      price: 120,
      SL: 100,
      TP: 100,
      lot: 0,
    },
    {
      orderNumber: '564',
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'BUY STOP',
      condition: 'over',
      conditionValue1: 2,
      conditionValue2: null,
      price: 120,
      SL: 100,
      TP: 100,
      lot: 0,
    },
    {
      orderNumber: '564',
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'BUY STOP',
      condition: 'over',
      conditionValue1: 2,
      conditionValue2: null,
      price: 120,
      SL: 100,
      TP: 100,
    },
  ];
  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    // this.orderService.getEvents().subscribe((data) => {
    //   this.events = data;
    // });
  }
  search() {
    if (this.searchTerm.length === 0) this.getOrders();
    // this.eventService.search(this.searchTerm).subscribe((data) => {
    //   console.log(data);
    //   this.events = data;
    // });
  }
  calculateLot(order: any, form: NgForm) {
    if (['BUY', 'BUY STOP', 'BUY LIMIT'].includes(order.direction))
      order.lot =
        (form.value.capital * form.value.percentage) /
        100 /
        (order.price - order.SL);
    else if (['SELL', 'SELL STOP', 'SELL LIMIT'].includes(order.direction))
      order.lot =
        (form.value.capital * form.value.percentage) / 100 / order.SL -
        order.price;
  }
}
