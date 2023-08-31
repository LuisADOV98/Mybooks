import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';
@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
public books: Books[]
constructor(public bookService: BooksService){

}
  
  edit(photo:string, title:string ,author:string ,type:string ,price:number ,id_book:number, id_user:number):void{
  
    let editBook: Books = new Books(id_book,id_user,title,type,author,price,photo)
    
    
    this.bookService.edit(editBook).subscribe((data:Response)=>{
      console.log(editBook);
    if (!data.error)
    {
      alert("Has editado un libro");
      
    } 
    else
    alert("No se encuentra el libro");

   })
   console.log(this.books);
  }

    
  }
