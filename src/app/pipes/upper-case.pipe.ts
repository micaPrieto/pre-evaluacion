import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})

export class mayusculaPipe implements PipeTransform {


  transform(value: string): string {

    return value.toUpperCase();

  }
}
