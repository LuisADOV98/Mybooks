import { Component, Input } from '@angular/core';

import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    public books: Books[];
    
  constructor(public bookservice2:BooksService){
   this.books = this.bookservice2.getAll()
  
  }

  buscarlibro(id_book:number){
    if (this.bookservice2.getOne(id_book)) {
      this.books = [this.bookservice2.getOne(id_book)]
    }else{
      this.bookservice2.getAll()
    }
    
    if (!id_book) {
      alert("no se escuentra el libro que buscas")
    }
   }


  deleteBook(bookdelete: Books) {
    this.bookservice2.delete(bookdelete.id_book)
  }

}