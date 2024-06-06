import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByIdtipomov'
})
export class FilterByIdtipomovPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
