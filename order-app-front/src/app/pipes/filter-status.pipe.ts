import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(orders: any, status: string): any {
    if (orders === null || orders === undefined) {
      return;
    }

    if (status.toLowerCase() === 'delivered') {
      return orders.filter(function (order) {
        return order.currentStatus.toString().toLowerCase() === 'delivered';
      });
    } else if (status.toLowerCase() === 'notdelivered') {
      return orders.filter(function (order) {
        return order.currentStatus.toString().toLowerCase() !== 'delivered';
      });
    }
  }

}
