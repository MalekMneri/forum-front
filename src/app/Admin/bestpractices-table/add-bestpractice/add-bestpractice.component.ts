import { NgForm } from '@angular/forms';
import { BestpracticeService } from './../../../Services/bestpractice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bestpractice',
  templateUrl: './add-bestpractice.component.html',
  styleUrls: ['./add-bestpractice.component.css'],
})
export class AddBestpracticeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bpService: BestpracticeService
  ) {}

  ngOnInit(): void {
    this.getbpByid();
  }
  getbpByid() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.bpService.getBestPracticeById(id).subscribe((data) => {
      console.log(data);
    });
  }
  addbp(event: any, form: NgForm) {
    event.preventDefault();
    form.value.valid = false;
    this.bpService.addBestPractice(form.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/dashboard/bestPractices']);
    });
  }
}
