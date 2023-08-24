import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Books[]


  constructor() {
    this.books =  [
      new Books(2001,1001,"El guardian entre el centeno", "Tapa: Blanda", "J.D. Salinger", 12, "https://vignette.wikia.nocookie.net/biblioteca-virtual-de-literatura/images/0/08/El_guardi%C3%A1n_entre_el_centeno.jpg/revision/latest?cb=20140527040459&path-prefix=es" ),
      new Books(2000,1000,"Inferno", "Tapa: Dura","Dan Brown", 23,"https://th.bing.com/th/id/OIP.pYJZxM3jJ0QLMRdVejY8KQHaLP?pid=ImgDet&rs=1"),
      new Books(2348, 9713,"Rayuela", "Tapa: Blanda","Julio Cortazar",15,"https://th.bing.com/th/id/OIP.6gZu-45eA2dWxxouXqR5MgHaLS?pid=ImgDet&rs=1" ),
      new Books(2315,8548,"Factorum","Tapa: Dura", "Charles Bukowski",25,"https://th.bing.com/th/id/R.47b1d9ead4e317237066d4ed29b378a4?rik=EukYwyQDasBmaQ&pid=ImgRaw&r=0"),
      new Books(2458,1457,"Angeles y demonios", "Tapa: Dura", "Dan Brown",20,"https://th.bing.com/th/id/OIP.KbXiAYnYerCNCQH3BIIZuwHaLP?pid=ImgDet&rs=1"),
      new Books(4268,9431, "Onyx", "Tapa: Blanda","Jennifer L. Armentrout", 16, "https://th.bing.com/th/id/OIP.JTxB0P_rceyKKi9XwrABzQHaLq?pid=ImgDet&rs=1" )
    ]
   }

   getAll(): Books[] {
    return this.books;
   }

   getOne(id_book: number):Books {
  
    let busqueda:Books = this.books.find(book => book.id_book == id_book)
   
    return busqueda
   }

   public add(newbook:Books): void{
      
    this.books.push(newbook)
    alert("Se ha añadido un nuevo libro")
 }
 
 delete(id_book: number):Boolean {
  let bol: boolean ;
  let filtro = this.books.findIndex(book=>book.id_book == id_book);

  if (filtro !== -1) {
  this.books.splice(filtro,1)
  bol = true
  }else{
    bol = false
  }
  return bol
  }

edit(bookEd:Books):boolean{
  
  let index = this.books.findIndex(bookedit => bookedit.id_book == bookEd.id_book);
  
   this.books.splice(index,1,bookEd)
   if (bookEd.id_book) {
    alert("Se ha editado el libro")
  } else {
    alert("no se escuentra el libro que quieres editar")
  }
  return index != -1
}

}