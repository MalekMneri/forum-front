import { Order } from './../../../Models/Order';
import { OrdersService } from './../../../Services/orders.service';
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
  showError = false;
  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    // this.orderService.getOrders().subscribe((data) => {
    //   this.orders = data;
    // });
  }
  search() {
    if (this.searchTerm.length === 0) this.getOrders();
    this.orderService.search(this.searchTerm).subscribe((data: any) => {
      console.log(data);
      this.orders = data;
    });
  }
  calculateLot(order: any, form: NgForm) {
    if (['BUY', 'BUY STOP', 'BUY LIMIT'].includes(order.direction))
      order.lot =
        (form.value.capital * form.value.percentage) /
        100 /
        (order.price - (order.SL - 20));
    else if (['SELL', 'SELL STOP', 'SELL LIMIT'].includes(order.direction))
      order.lot =
        (form.value.capital * form.value.percentage) /
        100 /
        (order.SL + 20 - order.price);

    order.lot = order.lot.toFixed(2);
  }
  approveOrder(form: NgForm, order: Order) {
    if (form.invalid) {
      this.showError = true;
      return;
    }
    const userId = JSON.parse(localStorage.getItem('user') || ' ').idUser;
    form.value.validatior = userId;
    form.value.lot = order.lot;
    console.log(form.value);
    // this.orderService
    //   .approveOrder(form.value, order.id || 0)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
  cancelOrder(form: NgForm, order: Order) {
    if (form.invalid) {
      this.showError = true;
      return;
    }
    const userId = JSON.parse(localStorage.getItem('user') || ' ').idUser;
    form.value.validatior = userId;
    form.value.lot = order.lot;
    console.log(form.value);
    // this.orderService
    //   .cancelOrder(form.value, order.id || 0)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}
