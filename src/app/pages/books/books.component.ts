import { Component, Input } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    public books: Books[];
    
  constructor(public bookservice2:BooksService,public bookSearch:BooksService){
   this.books = this.bookservice2.getAll()
  
  }

 

  deleteBook(bookdelete: Books) {
    this.bookservice2.delete(bookdelete.id_book)
  }

}