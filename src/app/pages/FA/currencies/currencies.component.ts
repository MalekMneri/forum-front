import { NgForm } from '@angular/forms';
import { currencyPairs, currencies } from '../../../Models/currencyEnums';
import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from 'src/app/Services/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent implements OnInit {
  constructor(private currencyService: CurrenciesService) {}
  currencyPairs = currencyPairs;
  currencies = currencies;
  ngOnInit(): void {}
  changeSpread(form: NgForm) {
    if (form.invalid) return;
    this.currencyService.changeSpread(form.value).subscribe((data) => {
      console.log(data);
    });
  }
  addRecommendation(form: NgForm) {
    if (form.invalid) return;
    this.currencyService.addRecommendation(form.value).subscribe((data) => {
      console.log(data);
    });
  }
}
