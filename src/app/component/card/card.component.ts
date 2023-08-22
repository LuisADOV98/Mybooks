import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from '../../pages/books/books.component';
import { Books } from '../../models/books';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() libro: Books;

 @Input() even: boolean
 @Output() bookDeleted = new EventEmitter<Books>();
 books: Books[] = []

 constructor(private bookService: BooksService) {
  this.books = this.bookService.getAll(); 
 }
 deleteBook(){
   this.bookDeleted.emit(this.libro);
 }
  

}
