import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {

constructor(public mieditor: BooksService){

}
  
  editarlibro(photo:string, title:string ,author:string ,type:string ,price:number ,id_book:number, id_user:number):void{
    let bookEd: Books = new Books(id_book,id_user,title,type,author,price,photo)
    console.log(bookEd);
    
    this.mieditor.edit(bookEd)
    console.log(bookEd);
    
  }
}
