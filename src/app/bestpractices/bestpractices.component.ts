import { NgForm } from '@angular/forms';
import { BestpracticeService } from './../Services/bestpractice.service';
import { BestPractice } from './../Models/BestPractice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestpractices',
  templateUrl: './bestpractices.component.html',
  styleUrls: ['./bestpractices.component.css'],
})
export class BestpracticesComponent implements OnInit {
  searchTerm = '';
  bestPractices: BestPractice[] = [];
  constructor(private bpService: BestpracticeService) {}

  ngOnInit(): void {
    this.getBestPractices();
  }
  getBestPractices() {
    this.bpService.getBestPractices().subscribe((data) => {
      this.bestPractices = data;
    });
  }

  search() {
    if (this.searchTerm.length === 0) this.getBestPractices();
    this.bpService.search(this.searchTerm).subscribe((data: any) => {
      console.log(data);
      this.bestPractices = data;
    });
  }
  addBestPractice(event: any, bForm: NgForm) {
    event.preventDefault();
    console.log(bForm.value);
    this.bpService.addBestPractice(bForm.value).subscribe((data) => {
      console.log(data);
      this.getBestPractices();
      bForm.reset();
    });
  }
}
