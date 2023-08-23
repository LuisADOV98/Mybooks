import { Component, Input } from '@angular/core';
<<<<<<< HEAD

import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';
=======
import { Books } from '../../models/books';

>>>>>>> dia4

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
  console.log(id_book);
  
  this.books = [this.bookservice2.getOne(id_book)]
 }

  deleteBook(bookdelete: Books) {
    this.bookservice2.delete(bookdelete.id_book)
  }

}