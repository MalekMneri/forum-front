import { Router } from '@angular/router';
import { EventsService } from './../../../Services/events.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  constructor(private router: Router, private eventService: EventsService) {}

  ngOnInit(): void {}
  addEvent(event: any, form: NgForm) {
    if (form.invalid) return;
    console.log(event);
    form.value.solved = false;
    form.value.user = 1;
    this.eventService.addEvent(form.value).subscribe((data) => {
      this.router.navigate(['/dashboard/events']);
    });
  }
}
