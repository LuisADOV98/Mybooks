import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  public book: void
  constructor(private miServicioBook:BooksService)
  {

  }
  
  public creaLibros(photo,title,author,type,price,id_book,id_user):void{
   
    let newBook = new Books(id_book,id_user,title,type,author,price,photo);
     this.book = this.miServicioBook.add(newBook)
  }

  
}






//  new Books(this.book.id_book,this.book.id_user,this.book.title,this.book.type,this.book.author,this.book.price,this.book.photo)