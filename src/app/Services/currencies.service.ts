import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { currencyState } from '../Models/currencyState';
import { Recommendation } from '../Models/Recommendation';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  apiRoute = environment.apiRoute;
  constructor(private http: HttpClient) {}
  getRecommendations() {
    return this.http.get(this.apiRoute + 'recommendations');
  }
  searchRecommendations(searchTerm: string) {
    return this.http.get(this.apiRoute + 'search-recommendation/' + searchTerm);
  }
  addRecommendation(recommendation: Recommendation) {
    return this.http.post(this.apiRoute + 'add-recommendation', recommendation);
  }
  deleteRecommendation(id: number) {
    return this.http.delete(this.apiRoute + 'delete-recommendation/' + id);
  }

  getCurrencyPairs() {}

  getCurrencyStates() {
    return this.http.get(this.apiRoute + 'currencystates');
  }
  changeCurrencyState(state: currencyState) {
    console;
    return this.http.post(
      this.apiRoute + 'add-currencystate/' + state.currency,
      state
    );
  }

  getSpreads() {
    return this.http.get(this.apiRoute + 'spreads');
  }
  changeSpread(details: any) {
    return this.http.post(
      this.apiRoute + 'add-spread/' + details.currencyPair,
      details
    );
  }
}
