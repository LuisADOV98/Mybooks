import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl  } from "@angular/forms";
import { UserService } from 'src/app/shared/user.service';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
public myForm: FormGroup
public myUser: User


constructor(private formBuilder: FormBuilder, private userService:UserService){
  this.buildForm();
}


  public register(){
   this.myUser = this.myForm.value
   let newUser = new User(this.myUser.name,this.myUser.last_name,this.myUser.email,this.myUser.photo,this.myUser.password)

  this.userService.register(newUser).subscribe((data:Response) =>
    { 
      if (!data.error)
      {
        this.myUser = data.dataUser
        alert("Te has registrado");
        console.log("ingresado" + this.myUser);
        
      }
      else
      alert("Algo ha salido mal");
      console.log(this.myUser);
      
    })

    
  }
  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
        id_user: [, Validators.required],
        name: [, Validators.required],
        last_name: [, Validators.required],
        email: [, [Validators.required, Validators.email]],
        photo: [, Validators.required],
        password:[,[Validators.required, Validators.minLength(minPassLength)]],
        password2: [,[Validators.required, this.checkPass]]
        
    })
}
private checkPass(control: AbstractControl){
  let result = {matchPassword: true}

  if (control.parent?.value.password == control.value) 
    result = null;
  
  return result
}


private validador(control:AbstractControl){
  let resultado = {checkPass: true}
  if(control.value == "matchPassword")
  return resultado
}
}
