import { NgForm } from '@angular/forms';
import { BestpracticeService } from './../../../Services/bestpractice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bp',
  templateUrl: './edit-bp.component.html',
  styleUrls: ['./edit-bp.component.css'],
})
export class EditBpComponent implements OnInit {
  bp = {
    idBP: 0,
    titre: '',
    description: '',
    dateCreation: '',
    valid: false,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bpService: BestpracticeService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.bpService.getBestPracticeById(id).subscribe((data: any) => {
      this.bp = data;
      this.bp.dateCreation = new Date(data.dateCreation)
        .toISOString()
        .split('T')[0];
    });
  }
  editbp(event: any, form: NgForm) {
    event.preventDefault();
    console.log(form.value);
    this.bpService
      .edit(form.value, this.bp.idBP.toString())
      .subscribe((data) => {
        this.router.navigate(['/dashboard/bestPractices']);
      });
  }
}
