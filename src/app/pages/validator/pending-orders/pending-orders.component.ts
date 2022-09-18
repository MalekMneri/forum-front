import { CurrenciesService } from 'src/app/Services/currencies.service';
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
  spreads = [{ spread: 0, currencyPair: '' }];
  spreadError = false;
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
      sl: 200,
      tp: 0,
      lot: 0,
      date: '',
      creator: { fullName: '' },
      validator: 0,
      state: 'pending',
      capital: 12,
      percentage: 12,
      spread: 0,
    },
  ];
  showError = false;
  constructor(
    private orderService: OrdersService,
    private currencyService: CurrenciesService
  ) {}

  ngOnInit(): void {
    this.getSpreads();
    this.getOrders();
  }
  getSpreads() {
    this.currencyService.getSpreads().subscribe((data: any) => {
      console.log(data);
      this.spreads = data;
    });
  }

  getOrders() {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
      this.orders.forEach((order) => (order.spread = 0));
    });
  }
  search() {
    if (this.searchTerm.length === 0) {
      this.getOrders();
      return;
    }
    this.orderService.search(this.searchTerm).subscribe((data: any) => {
      console.log(data);
      this.orders = data;
    });
  }
  calculateLot(order: any, form: NgForm) {
    //get spread
    const spread = this.spreads.find(
      (spread) => spread.currencyPair === order.currencyPair
    );
    if (!spread) {
      this.spreadError = true;
      return;
    }
    let numbersAfterComma = this.checkNubmer(order.price);
    let diff = 0;
    if (['BUY', 'BUY STOP', 'BUY LIMIT'].includes(order.direction)) {
      diff = (order.price - order.sl) * 10 ** numbersAfterComma;
      order.lot = (form.value.capital * form.value.percentage) / 100 / diff;
    } else if (['SELL', 'SELL STOP', 'SELL LIMIT'].includes(order.direction)) {
      diff = (order.sl - order.price) * 10 ** numbersAfterComma;
      order.lot = (form.value.capital * form.value.percentage) / 100 / diff;
    }
    order.lot = order.lot.toFixed(2);
    order.spread = spread.spread;
  }

  checkNubmer(num: number): number {
    const str = num.toString();
    const arr = str.split('.');
    console.log(arr);

    return arr[1].length;
  }

  approveOrder(form: NgForm, order: Order) {
    const spread = this.spreads.find(
      (spread) => spread.currencyPair === order.currencyPair
    );
    if (!spread) {
      this.spreadError = true;
      return;
    }
    if (form.invalid) {
      this.showError = true;
      return;
    }
    this.calculateLot(order, form);
    const userId = JSON.parse(localStorage.getItem('user') || ' ').idUser;
    form.value.validatior = userId;
    form.value.lot = order.lot;
    console.log(form.value);
    this.orderService
      .approveOrder(form.value, order.id || 0)
      .subscribe((data) => {
        console.log(data);
        this.getOrders();
      });
  }
  cancelOrder(form: NgForm, order: Order) {
    this.calculateLot(order, form);
    const userId = JSON.parse(localStorage.getItem('user') || ' ').idUser;
    form.value.validatior = userId;
    form.value.lot = order.lot;
    console.log(form.value);
    this.orderService
      .cancelOrder(form.value, order.id || 0)
      .subscribe((data) => {
        console.log(data);
        this.getOrders();
      });
  }
}
