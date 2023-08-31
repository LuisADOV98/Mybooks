import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  public books: Books[]
  private url = "http://localhost:4000"


  constructor(private http: HttpClient) {

  }

   getAll():Observable<Object> {
    return this.http.get(this.url + "/book")
   }

   getOne(id_book:number):Observable<Object>{
    return this.http.get(`${this.url}/book2?id_book=${id_book}`);
  }

  add(newBook:Books):Observable<Object>{
    return this.http.post(this.url+"/book", newBook);
  }

  delete(id_book:number):Observable<Object>{
    return this.http.request('delete', this.url + "/book", {body:{id_book:id_book}});
  }


  edit(editBook:Books):Observable<Object>{
    return this.http.put(this.url + "/book",editBook);
  }

}