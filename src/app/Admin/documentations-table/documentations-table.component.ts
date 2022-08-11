import { DocumentationsService } from './../../Services/documentations.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentations-table',
  templateUrl: './documentations-table.component.html',
  styleUrls: ['./documentations-table.component.css'],
})
export class DocumentationsTableComponent implements OnInit {
  searchTerm = '';
  documentations: any[] = [];
  constructor(
    private router: Router,
    private docService: DocumentationsService
  ) {}

  ngOnInit(): void {}
  getDocs() {
    this.docService.getDocumentations().subscribe((data: any) => {
      this.documentations = data;
    });
  }
  search() {
    if (this.searchTerm.length === 0) this.getDocs();
    this.docService.search(this.searchTerm).subscribe((data: any) => {
      this.documentations = data;
    });
  }
  deleteDocumentation(id: string) {
    this.docService.deleteDocumentation(id).subscribe((data) => {
      this.getDocs();
    });
  }
}
