import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public book: Books
  public books: Books[]
  private url = "http://localhost:3000"


  constructor(private http: HttpClient) {

  }

   getAll(id_user):Observable<Object> {
   
    return this.http.get(`${this.url}/books?id_user=${id_user}`)
   }

   getOne(id_user:number, id_book:number):Observable<Object>{
    return this.http.get(`${this.url}/books?id_user=${id_user}&id_book=${id_book}`);
   
    
  }

  add(newBook:Books):Observable<Object>{
    return this.http.post(this.url+"/books", newBook);
  }

  delete(id_book:number):Observable<Object>{
    return this.http.request('delete', this.url + "/books", {body:{id_book:id_book}});
  }


  edit(editBook:Books):Observable<Object>{
    return this.http.put(this.url + "/books",editBook);
  }

}