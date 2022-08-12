import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DocumentationsService } from 'src/app/Services/documentations.service';

@Component({
  selector: 'app-add-documentation',
  templateUrl: './add-documentation.component.html',
  styleUrls: ['./add-documentation.component.css'],
})
export class AddDocumentationComponent implements OnInit {
  constructor(
    private docService: DocumentationsService,
    private router: Router
  ) {}
  // initialise empty file variable
  file: File = new File([''], 'empty');
  ngOnInit(): void {}

  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  addDoc(event: any, form: NgForm) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.file, this.file.name);
    data.append('description', form.value.description);
    data.append('dateCreation', new Date().toISOString().split('T')[0]);
    this.docService.addDocumentation(data).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/dashboard/documentations']);
    });
    // data.forEach((value, key) => {
    //   console.log(key, value);
    // });
  }
}
