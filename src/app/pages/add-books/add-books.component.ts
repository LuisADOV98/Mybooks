import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';


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
     this.book = this.miServicioBook.add(newBook);
     alert("Se ha añadido un nuevo libro")
  }

  
}
