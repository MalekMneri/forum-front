import { CurrenciesService } from './../../../Services/currencies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  searchTerm = '';
  userRole = ' ';
  recommendations = [{ id: 0, currencyPair: ' ', comment: '' }];
  states = [{ currency: ' ', state: '' }];
  constructor(private currencyService: CurrenciesService) {}
  ngOnInit(): void {
    this.getCurrencyStates();
    this.getRecommendations();
    this.userRole = JSON.parse(localStorage.getItem('user') || '').role;
  }
  getRecommendations() {
    this.currencyService.getRecommendations().subscribe((data: any) => {
      this.recommendations = data;
      console.log(data);
    });
  }
  getCurrencyStates() {
    this.currencyService.getCurrencyStates().subscribe((data: any) => {
      this.states = data;
      console.log(data);
    });
  }
  search() {
    if (this.searchTerm.length === 0) {
      this.getRecommendations();
      return;
    }
    this.currencyService
      .searchRecommendations(this.searchTerm.toUpperCase())
      .subscribe((data: any) => {
        this.recommendations = data;
      });
  }
  removeRecommendation(id: number) {
    this.currencyService.deleteRecommendation(id).subscribe((data: any) => {
      console.log(data);
      this.getRecommendations();
    });
  }
}
