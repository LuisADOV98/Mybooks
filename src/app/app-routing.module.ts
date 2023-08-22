import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { CardComponent } from './component/card/card.component';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { UpdateBooksComponent } from './pages/update-books/update-books.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:'full'},
  {path: "header", component: HeaderComponent},
  {path: "footer", component: FooterComponent},
  {path: "home", component: HomeComponent}, 
  {path: "form-register", component: FormRegisterComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "card", component: CardComponent},
  {path: "addBooks", component: AddBooksComponent},
  {path: "updateBooks", component: UpdateBooksComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
