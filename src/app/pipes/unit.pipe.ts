import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    switch (value) {
      case 0: return 'Minutes';
      case 1: return 'Hours';
      case 2: return 'Days';
      case 3: return 'Months';
      case 4: return 'Year';
    }

  }

}
