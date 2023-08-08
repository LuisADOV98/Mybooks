import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public miUser: User

    constructor(){
      this.miUser = new User(2552, "luis", "de oliveira", "luis123@gmail.com", "https://th.bing.com/th?id=OIF.MOm6nxSl%2bDx7iaju4hzeeQ&pid=ImgDet&rs=1", "12345678")
    }

    public cambiarDatos(newName:HTMLInputElement, newLastName:HTMLInputElement, newEmail:HTMLInputElement,newPhoto:HTMLInputElement){
      console.log(this.miUser.name);
      
      this.miUser.name = newName.value;
      this.miUser.last_name = newLastName.value;
      this.miUser.email = newEmail.value;
      this.miUser.photo = newPhoto.value
  }
    }

