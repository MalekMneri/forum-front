import { BestpracticeService } from './../../Services/bestpractice.service';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from './../../Models/Commentaire';
import { BestPractice } from './../../Models/BestPractice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp-details',
  templateUrl: './bp-details.component.html',
  styleUrls: ['./bp-details.component.css'],
})
export class BpDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviceBP: BestpracticeService
  ) {}
  bp: BestPractice = {
    idBP: 0,
    titre: 'No best practice found',
    description: '',
    dateCreation: new Date(),
    pieceJointe: '',
    valid: true,
  };
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.serviceBP.getBestPracticeById(id).subscribe((data) => {
      this.bp = data;
    });
  }
}
