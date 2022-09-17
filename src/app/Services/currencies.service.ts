import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recommendation } from '../Models/recommendation';

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
  deleteRecommendation() {}

  getCurrencyPairs() {}

  getCurrencyStates() {
    return this.http.get(this.apiRoute + 'currencystates');
  }
  changeCurrencyState() {}

  getSpreads() {}
  changeSpread(details: any) {
    return this.http.post(
      this.apiRoute + 'add-spread/' + details.currencyPair,
      details
    );
  }
}
