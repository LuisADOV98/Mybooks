import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Response } from 'src/app/models/response';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public miUser: User

    constructor(public userService:UserService){
      this.miUser = this.userService.user
    }

    public cambiarDatos(name:HTMLInputElement, lat_name:HTMLInputElement, email:HTMLInputElement,photo:HTMLInputElement){
   
     
      this.miUser.name = name.value;
      this.miUser.last_name = lat_name.value;
      this.miUser.email = email.value;
      this.miUser.photo = photo.value
      let editUser: User = new User(this.miUser.name,this.miUser.last_name,this.miUser.email,this.miUser.photo,this.miUser.password,this.miUser.id_user)
      if (this.miUser.photo === "") {
        editUser.photo = null
      } 
      if (this.miUser.name === ""){
        editUser.name = null
      }
      if (this.miUser.last_name === "") {
        editUser.last_name = null
      }
      if (this.miUser.email === "") {
        editUser.email = null
      }
      
      
      this.userService.editProfile(editUser).subscribe((data:Response) => {
        if (!data.error)
        {
          alert("Has editado tu perfil");
          
        } 
        else
        alert("Algo ha salido mal");
      })
  }
    }

