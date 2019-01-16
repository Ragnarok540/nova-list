import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    switch (value) {
      case 0: return 'Pending';
      case 1: return 'In Progress';
      case 2: return 'Done';
      case 3: return 'Archived';
    }

  }

}
