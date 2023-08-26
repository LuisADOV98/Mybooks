import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl  } from "@angular/forms";
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
public myForm: FormGroup



constructor(private formBuilder: FormBuilder){
  this.buildForm();
}

  public recogerInfo(){
    
  }


  public register(){
    const user = this.myForm.value
    console.log(user);
    
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
