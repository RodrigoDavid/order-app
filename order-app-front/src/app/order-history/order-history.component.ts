import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000';

  orders: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.orders = this.http.get(this.ROOT_URL + '/orders');
  }


}
