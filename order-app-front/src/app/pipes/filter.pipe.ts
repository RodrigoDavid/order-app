import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(orders: any, searchId: any): any {
    // check if search item is undefined
    if (searchId === undefined || searchId === '') return orders;

    // return updated orders array
    return orders.filter(function (order) {
      return order.id.toString().includes(searchId);
    });
  }

}
