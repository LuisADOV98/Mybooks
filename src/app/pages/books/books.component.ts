import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    public books: Books[];
    
  constructor(){
   
    this.books = [
      new Books(2001,1001,"El guardian entre el centeno", "Blanda", "J.D. Salinger", 12, "https://vignette.wikia.nocookie.net/biblioteca-virtual-de-literatura/images/0/08/El_guardi%C3%A1n_entre_el_centeno.jpg/revision/latest?cb=20140527040459&path-prefix=es" ),
      new Books(2000,1000,"Inferno", "Dura","Dan Brown", 23,"https://th.bing.com/th/id/OIP.pYJZxM3jJ0QLMRdVejY8KQHaLP?pid=ImgDet&rs=1"),
      new Books(2348, 9713,"Rayuela", "Blanda","Julio Cortazar",15,"https://th.bing.com/th/id/OIP.6gZu-45eA2dWxxouXqR5MgHaLS?pid=ImgDet&rs=1" ),
      new Books(2315,8548,"Factorum","Dura", "Charles Bukowski",25,"https://th.bing.com/th/id/R.47b1d9ead4e317237066d4ed29b378a4?rik=EukYwyQDasBmaQ&pid=ImgRaw&r=0"),
      new Books(2458,1457,"Angeles y demonios", "dura", "Dan Brown",20,"https://th.bing.com/th/id/OIP.KbXiAYnYerCNCQH3BIIZuwHaLP?pid=ImgDet&rs=1"),
      new Books(4268,9431, "Onyx", "Blanda","Jennifer L. Armentrout", 16, "https://th.bing.com/th/id/OIP.JTxB0P_rceyKKi9XwrABzQHaLq?pid=ImgDet&rs=1" )
    ]
  }
 public anyadirLibro(id_book:number,id_user:number,title:string,type:string,author:string,price:number,photo:string,){
   let newbook = new Books(id_book,id_user,title,type,author,price,photo)
  this.books.push(newbook)
  }
}