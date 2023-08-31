import { Component, Input } from '@angular/core';
import { Response } from 'src/app/models/response';
import { BooksService } from '../../shared/books.service';
import { Books } from '../../models/books';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    public books: Books[];
    
  constructor(public bookservice:BooksService){
    this.bookservice.getAll().subscribe((data:Response)=>{
      console.log(data);
      
      this.books = data.data;
      })
  
  }

   deleteBook(id_book:number):void{
    this.bookservice.delete(id_book).subscribe((data:Response)=>{
      console.log(id_book);
      
      if (data.error == false) {
       
        this.books = this.books.filter(book => book.id_book != id_book);
          console.log(data);
        
      }
    })
  }
  


  buscarlibro(id_book:number){
    
    if (id_book) {
  this.bookservice.getOne(id_book).subscribe((data:Response)=>{
    this.books = [data.data_book];
    
  })
    }else{
      this.bookservice.getAll().subscribe((data:Response)=>{
        this.books = data.data;
      })
    }

}}