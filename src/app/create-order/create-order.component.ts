import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  constructor() {}
  directionList: string[] = [];
  currencyPairs = [
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
    { id: 1, name: 'BTCUSDT' },
  ];

  ngOnInit(): void {}
  changeDirection(event: any) {
    const type = event.target.value;
    if (type === 'ME') this.directionList = ['BUY', 'SELL'];
    else if (type === 'PO')
      this.directionList = ['BUY STOP', 'BUY LIMIT', 'SELL STOP', 'SELL LIMIT'];
  }
}
