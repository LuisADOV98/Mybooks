import { Pipe, PipeTransform } from '@angular/core';
import { Books } from '../models/books';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(codigo: Books,): string {
    return `Ref-${codigo.id_book}`
  }

}
