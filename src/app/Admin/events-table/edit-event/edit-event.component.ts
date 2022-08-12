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
  event = {
    idEvent: '',
    titre: '',
    description: '',
    dateCreation: '',
    dateCloture: '',
    pieceJointe: 'none',
  };
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.eventsService.getEvent(id).subscribe((data) => {
      this.event = data;
      this.event.dateCreation = new Date(data.dateCreation)
        .toISOString()
        .split('T')[0];
      this.event.dateCloture = new Date(data.dateCloture)
        .toISOString()
        .split('T')[0];
    });
  }
  editEvent(event: any, form: NgForm) {
    form.value.pieceJointe = 'none';
    console.log(form.value);
    if (form.invalid) {
      console.log('invalid');
      return;
    }
    let id = this.route.snapshot.paramMap.get('id') || '';

    this.eventsService.editEvent(form.value, id).subscribe((data) => {
      this.router.navigate(['/dashboard/events']);
    });
  }
}
