import { HttpClient } from '@angular/common/http';
import { Order } from './../Models/Order';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiRoute = environment.apiRoute;
  constructor(private http: HttpClient) {}
  create(order: Order) {
    return this.http.post(this.apiRoute + 'add-order', order);
  }
  getMyOrders() {
    const id = JSON.parse(localStorage.getItem('user') || ' ').idUser;
    return this.http.get(this.apiRoute + 'my-orders/' + id);
  }
  getOrders() {
    return this.http.get(this.apiRoute + 'orders');
  }
  search(searchTerm: string) {
    return this.http.get(this.apiRoute + 'search-orders/' + searchTerm);
  }
  searchMyOrders(searchTerm: string) {
    return this.http.get(this.apiRoute + 'search-my-orders/' + searchTerm);
  }

  approveOrder(validation: any, orderId: number) {
    return this.http.put(
      this.apiRoute + 'approve-order/' + orderId,
      validation
    );
  }
  cancelOrder(validation: any, orderId: number) {
    return this.http.put(this.apiRoute + 'cancel-order/' + orderId, validation);
  }
  deleteOrder(orderId: number) {
    return this.http.delete(this.apiRoute + 'delete-order/' + orderId);
  }
}
