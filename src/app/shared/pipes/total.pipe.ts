import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    if (value) {
      if (args[0] === 'HT') {
        return value.totalHt();
      } else if (args[0] === 'TTC') {
        return value.totalTtc();
      }
    }

    return 'ERROR';
  }

}
