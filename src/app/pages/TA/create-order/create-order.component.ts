import { currencyPairs } from '../../../Models/currencyEnums';
import { OrdersService } from './../../../Services/orders.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  constructor(private orderService: OrdersService) {}
  showCondition = false;
  currencyPairs = currencyPairs;
  directionList: string[] = [];
  error = { show: false, message: ' ' };
  showSuccess = false;
  ngOnInit(): void {}
  changeDirection(event: any) {
    const type = event.target.value;
    if (type === 'ME') {
      this.directionList = ['BUY', 'SELL'];
      this.showCondition = false;
    } else if (type === 'PO') {
      this.showCondition = true;
      this.directionList = ['BUY STOP', 'BUY LIMIT', 'SELL STOP', 'SELL LIMIT'];
    }
  }

  createOrder(form: NgForm) {
    if (form.invalid) {
      this.error.show = true;
      this.error.message = 'please fill all required fields!';
      return;
    }
    if (!this.checkPriceSlDifference(form)) {
      form.controls['price'].setErrors({ higher: true });
      this.error.show = true;
      this.error.message = 'BUY : SL < Price <br> -SELL: SL > Price';
      return;
    } else {
      form.controls['price'].setErrors(null);
    }
    let user = localStorage.getItem('user') || ' ';
    const idCreator = JSON.parse(user).idUser;
    form.value.creator = { id: idCreator };
    form.value.lot = 0;
    console.log(form.value);
    this.orderService.create(form.value).subscribe((data) => {
      console.log(data);
      this.showSuccess = true;
    });
  }
  checkPriceSlDifference(form: NgForm) {
    //BUY : SL < Price  -SELL: SL > Price
    if (['BUY', 'BUY STOP', 'BUY LIMIT'].includes(form.value.direction))
      return form.value.price > form.value.sl;
    else ['SELL', 'SELL STOP', 'SELL LIMIT'].includes(form.value.direction);
    return form.value.price < form.value.sl;
  }
}
