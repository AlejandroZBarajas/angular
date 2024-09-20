import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  @Output() event = new EventEmitter<string>();
  @Output() newUser = new EventEmitter<IUser>();

  message: string = "Añadido"

  ingresar(): void{
    if(this.validarData(this.user)){
      this.newUser.emit(this.user);
    }else{
      alert("Datos faltantes")
    }
  }
  validarData(user: IUser):boolean{
    if(
      user.name && user.id && user.phone && user.username && user.website
    ){
      return true
    }
    return false
  }

  enviar(){
    this.event.emit(this.message)
  }

}