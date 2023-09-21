import { Validators } from "@angular/forms"

export class User {
    public id_user:number
    public name:string
    public last_name:string
    public email:string
    public photo:string
    public password:string
    myForm: any
    formBuilder: any
    
        constructor(name:string, last_name:string,email:string, photo:string, password:string, id_user?:number){
            this.name = name
            this.last_name = last_name
            this.email = email
            this.photo = photo
            this.password = password
            this.id_user = id_user
        }

        public nombreCompleto():string{
            return this.name + " " + this.last_name
        }

}
