import { NgForm } from '@angular/forms';
import { EventsService } from './../../../Services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}
  event: any;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.eventsService.getEvent(id).subscribe((data) => {
      this.event = data;
    });
  }
  editEvent(event: any, form: NgForm) {
    if (form.invalid) return;
    let id = this.route.snapshot.paramMap.get('id') || '';

    this.eventsService.editEvent(event, id).subscribe((data) => {
      this.router.navigate(['/dashboard/events']);
    });
  }
}
