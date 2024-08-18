import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsSeparator',
  standalone: true
})
export class ThousandsSeparatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
