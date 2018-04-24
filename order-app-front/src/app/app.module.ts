import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    NavbarComponent,
    HomeComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'orders', component: OrderComponent
      },
      {
        path: 'order-history', component: OrderHistoryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
