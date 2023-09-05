import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorfondo'
})
export class ColorfondoPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value)?"bg-dark text-white":"bg-light text-dark";
  }

}
