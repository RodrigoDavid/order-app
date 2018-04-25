import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Order} from "../model/order";
import 'rxjs/add/operator/map';
import {Location} from "@angular/common";

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000';

  orders: any;
  searchDelivered: any;
  orderObservable: Observable<Order>;

  constructor(private http: HttpClient) {
    this.getOrders();
  }

  ngOnInit() {
  }

  getOrders() {
    this.orders = this.http.get(this.ROOT_URL + '/orders');
  }


  changeOrderStatus(id: any, $event) {
    this.orderObservable = this.http.get<Order>(this.ROOT_URL + '/orders/' + id);
    // console.log($event.target.value);
    this.orderObservable.subscribe(data => {
      data.statusHistory.list.push({date: new Date(), status: data.currentStatus.toString()});
      data.currentStatus = $event.target.value;
      this.http.put(this.ROOT_URL + '/orders/' + id, data).subscribe();
    });
    this.getOrders();
  }
}
