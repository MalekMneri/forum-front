import { BestpracticeService } from './../../Services/bestpractice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestpractices-table',
  templateUrl: './bestpractices-table.component.html',
  styleUrls: ['./bestpractices-table.component.css'],
})
export class BestpracticesTableComponent implements OnInit {
  bestPractices: any[] = [];
  searchTerm = '';
  constructor(private bpService: BestpracticeService) {}

  ngOnInit(): void {
    this.getbp();
  }
  getbp() {
    this.bpService.getBestPractices().subscribe((data) => {
      this.bestPractices = data;
      console.log(this.bestPractices);
    });
  }

  deletebp(id: number) {
    this.bpService.delete(id.toString()).subscribe((data) => {
      this.getbp();
    });
  }

  search() {
    if (this.searchTerm.length === 0) this.getbp();
    this.bpService.search(this.searchTerm).subscribe((data: any) => {
      this.bestPractices = data;
    });
  }
  resolveBP(bp: any) {
    if (!bp.valid) {
      this.bpService.resolveBP(bp.idBP.toString()).subscribe((data) => {
        this.getbp();
      });
    }
  }
}
