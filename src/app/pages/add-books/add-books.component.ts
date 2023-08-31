import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';
import { Response } from 'src/app/models/response';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  public books: Books[]
  public book: void
  constructor(private miServicioBook:BooksService)
  {
  
  }
  


  public addBook(photo:string,title:string,author:string,type:string,price:number,id_book:number,id_user:number):void{
    let newBook: Books = new Books(id_book,id_user,title,type,author,price,photo)
    this.miServicioBook.add(newBook).subscribe((data:Response)=>{
      
      if (!data.error)
      {
        alert("Has añadido un nuevo libro");
        
      } 
      else
      alert("No hay donde agregarlo");

     })
     console.log(this.books);
  }

}