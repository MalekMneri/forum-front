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
  bestPractices: BestPractice[] = [
    {
      idBP: 1,
      titre: 'Best Practice 1',
      description: 'Description 1',
      dateCreation: new Date(),
      pieceJointe: '',
      valid: true,
    },
    {
      idBP: 2,
      titre: 'Best Practice 2',
      description: 'Description 2',
      dateCreation: new Date(),
      pieceJointe: '',
      valid: false,
    },
    {
      idBP: 3,
      titre: 'Best Practice 3',
      description: 'Description 3',
      dateCreation: new Date(),
      pieceJointe: '',
      valid: true,
    },
  ];
  constructor(private bpService: BestpracticeService) {}

  ngOnInit(): void {
    // this.bpService.getBestPractices().subscribe((data) => {
    //   this.bestPractices = data;
    // }
    // );
  }

  search() {
    this.bpService.searchBP(this.searchTerm).subscribe((data) => {
      this.bestPractices = data;
    });
  }
}
