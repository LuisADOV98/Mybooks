import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';
import { Response } from 'src/app/models/response';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  public books: Books[]
  public book: void
  constructor(private miServicioBook:BooksService, private userService: UserService)
  {
  
  }
  


  public addBook(photo:string,title:string,author:string,type:string,price:number):void{
    let newBook: Books = new Books(title,type,author,price,photo,0,this.userService.user.id_user)
    console.log(newBook);
    console.log(this.userService.user);
    
    this.miServicioBook.add(newBook).subscribe((data:Response)=>{
      this.books = data.data

      if (!data.error)
      {
        alert("Has añadido un nuevo libro");
        
      } 
      else
      alert("No hay donde agregarlo");

     })
  }

}