import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from '../../pages/books/books.component';
import { Books } from '../../models/books';
import { BooksService } from '../../shared/books.service';
import { Response } from 'src/app/models/response';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() libro: Books;

 @Input() even: boolean
 @Output() bookDeleted = new EventEmitter<number>();

 public books: Books[]


 constructor() {

 }
 deleteBook(){
   this.bookDeleted.emit(this.libro.id_book);
 }
  

}
