import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentationsService {
  apiRoute = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}
  search(searchTerm: string) {
    return this.http.get(this.apiRoute + 'searchd/' + searchTerm);
  }
  getDocumentations() {
    return this.http.get(this.apiRoute + 'documentations');
  }
  getDocumentation(id: string) {
    return this.http.get(this.apiRoute + 'documentation/' + id);
  }
  deleteDocumentation(id: string) {
    return this.http.delete(this.apiRoute + 'deleted/' + id);
  }
  addDocumentation(documentation: any) {
    return this.http.post(this.apiRoute + 'upload', documentation);
  }
}
