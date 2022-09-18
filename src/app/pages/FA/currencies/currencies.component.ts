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
  showRecommendationError = false;
  showSpreadError = false;
  showRecommendationSuccess = false;
  showSpreadSuccess = false;
  showStateSuccess = false;
  showStateError = false;
  currencyPairs = currencyPairs;
  currencies = currencies;
  currencyStates = [{ id: 0, currency: '', state: ' ' }];
  spreads = [{ id: 0, currencyPair: '', spread: 0 }];
  ngOnInit(): void {
    this.getCurrencyStates();
    this.getSpreads();
  }

  getSpreads() {
    this.currencyService.getSpreads().subscribe((data: any) => {
      this.spreads = data;
    });
  }
  changeSpread(form: NgForm) {
    if (form.invalid) {
      this.showSpreadError = true;
      return;
    }
    this.currencyService.changeSpread(form.value).subscribe((data) => {
      console.log(data);
      this.showSpreadSuccess = true;
      this.getSpreads();
    });
  }
  getCurrencyStates() {
    this.currencyService.getCurrencyStates().subscribe((data: any) => {
      this.currencyStates = data;
      console.log(data);
    });
  }
  addRecommendation(form: NgForm) {
    if (form.invalid) {
      this.showRecommendationError = true;
      return;
    }
    this.currencyService.addRecommendation(form.value).subscribe((data) => {
      console.log(data);
      this.showRecommendationSuccess = true;
    });
  }
  setCurrencyState(form: NgForm) {
    if (form.invalid) {
      this.showStateError = true;
    }
    this.currencyService.changeCurrencyState(form.value).subscribe((data) => {
      this.showStateSuccess = true;
      this.getCurrencyStates();
      console.log(data);
    });
  }
}
