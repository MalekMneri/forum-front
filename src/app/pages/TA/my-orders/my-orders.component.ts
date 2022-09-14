import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  constructor() {}
  searchTerm = '';
  orders = [
    {
      orderNumber: '564',
      currencyPair: 'AUDJPY',
      orderType: 'pendingOrder',
      direction: 'SELL STOP',
      condition: 'over',
      conditionValue1: 220,
      conditionValue2: null,
      price: 1.16975,
      SL: 1.17166,
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
      direction: 'SELL STOP',
      condition: 'over',
      conditionValue1: 2,
      conditionValue2: null,
      price: 150,
      SL: 200,
      TP: 0,
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

  ngOnInit(): void {}
  search() {}
}
