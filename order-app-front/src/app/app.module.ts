import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {OrderComponent} from './order/order.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {EstablishmentComponent} from './establishment/establishment.component';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './pipes/filter.pipe';
import { FilterStatusPipe } from './pipes/filter-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    NavbarComponent,
    HomeComponent,
    OrderHistoryComponent,
    EstablishmentComponent,
    FilterPipe,
    FilterStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'orders', component: OrderComponent
      },
      {
        path: 'order-history', component: OrderHistoryComponent
      },
      {
        path: 'establishment', component: EstablishmentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
