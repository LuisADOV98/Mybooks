import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from '../../pages/books/books.component';
import { Books } from '../../models/books';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() libro: Books;

 @Input() even: boolean
 @Output() bookDeleted = new EventEmitter<Books>();

 deleteBook(libro: Books): void {
   this.bookDeleted.emit(this.libro);
 }

}
