import { BestPractice } from './../Models/BestPractice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BestpracticeService {
  apiRoute = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}

  getBestPractices() {
    return this.http.get<BestPractice[]>(this.apiRoute + 'bestpractices');
  }
  searchBP(searchTerm: string) {
    return this.http.get<BestPractice[]>(
      this.apiRoute + `searchb/${searchTerm}`
    );
  }
  addBestPractice(bp: BestPractice) {
    return this.http.post(this.apiRoute + 'addbp', bp);
  }
  getBestPracticeById(idBP: string) {
    return this.http.get<BestPractice>(this.apiRoute + `bestpractice/${idBP}`);
  }
}
