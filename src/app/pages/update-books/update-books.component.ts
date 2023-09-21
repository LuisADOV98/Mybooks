import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
public books: Books[]
constructor(public bookService: BooksService, private serviceUser: UserService){

}
  
  public edit(photo:string, title:string ,author:string ,type:string ,price:number ,id_book:number):void{
   
    let editBook: Books = new Books(title,type,author,price,photo,id_book,this.serviceUser.user.id_user)
   if (photo === "") {
      editBook.photo = null
    } 
    if (title === "") {
      editBook.title = null
    }
    if (author === "") {
      editBook.author = null
    }
    if (price == 0) {
      editBook.price = null
    }
    if (type === "") {
      editBook.type = null
    }
    this.bookService.edit(editBook).subscribe((data:Response)=>{
   
    if (!data.error)
    {
      alert("Has editado un libro");
      
    } 
    else
    alert("No se encuentra el libro");

   })
  }

    
  }
