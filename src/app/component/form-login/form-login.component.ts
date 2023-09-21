import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public user: User
  
 
constructor(public userService: UserService,public router: Router){
  this.user = new User("","","","","");

  
}

public login(form:NgForm){
  
  this.userService.login(this.user).subscribe((data:Response) =>{ 
    if(!data.error){
  this.userService.user = data.dataUser;
  console.log(this.userService.user);
  
  this.router.navigate(["/books"]);
  this.userService.logueado = true
  
  console.log(data.dataUser);

}
else
{
console.log("error al iniciar");
this.userService.logueado = false
alert("Credenciales incorrectas")
}
})
}

}

  


