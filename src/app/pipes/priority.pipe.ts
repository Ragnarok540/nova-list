import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    switch (value) {
      case 0: return 'None';
      case 1: return 'Low';
      case 2: return 'Medium';
      case 3: return 'High';
    }

  }

}
