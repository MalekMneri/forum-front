import { BestPractice } from './../Models/BestPractice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BestpracticeService {
  constructor(private http: HttpClient) {}

  getBestPractices() {
    return this.http.get<BestPractice[]>('http://localhost:8080/bestpractices');
  }
  searchBP(searchTerm: string) {
    return this.http.get<BestPractice[]>(
      `http://localhost:8080/searchbp/${searchTerm}`
    );
  }
}
