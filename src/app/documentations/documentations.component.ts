import { Documentation } from './../Models/Documentation';
import { Router } from '@angular/router';
import { DocumentationsService } from './../Services/documentations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentations',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css'],
})
export class DocumentationsComponent implements OnInit {
  searchTerm = '';
  documentations: Documentation[] = [];
  constructor(
    private documentationService: DocumentationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDocs();
  }

  getDocs() {
    this.documentationService.getDocumentations().subscribe((data: any) => {
      this.documentations = data;
    });
  }
  search() {
    this.documentationService.search(this.searchTerm).subscribe((data: any) => {
      this.documentations = data;
    });
  }
  downloadFile(id: number = 0) {
    this.documentationService.downloadFile(id.toString()).subscribe((data) => {
      console.log(data);
      const blob = new Blob([data], { type: data.type });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }),
      (error: any) => {
        console.log(error);
      };
  }
}
