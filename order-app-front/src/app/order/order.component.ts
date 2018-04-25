import {Component, OnInit} from '@angular/core';
import {Order} from '../model/order';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000';

  product_1: string = 'RANGE ROVER EVOQUE';
  product_2: string = 'RANGE ROVER EVOQUE CONVERTIBLE';

  order: Order;
  cart: string[] = [];
  createdMessage: boolean;
  orderPosted: any;

  addToOrder(product: string) {
    this.cart.push(product);
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createOrder() {
    this.order = new Order();
    this.order.id = this.randomInt(10000, 99999);
    this.order.product = this.cart;

    this.orderPosted = this.http.post(this.ROOT_URL + '/orders', this.order).subscribe();

    console.log(this.order);
    this.createdMessage = true;
    this.reset();
  }

  reset() {
    setTimeout(() => {
      this.createdMessage = false;
      this.cart = [];
    }, 1350);
  }
}
