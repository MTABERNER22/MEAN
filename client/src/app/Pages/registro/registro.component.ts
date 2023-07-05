import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
    ,private auth:AuthService,private route:Router) { 
    this.myForm = this.fb.group({
      nombre:["",[Validators.required]],
      apellido:["", [Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/)]]
    })
  }
  registro(){
    console.log(this.myForm.value)
    //EJEMPLO CON ERROR EN OBSERVABLE
    this.auth.registro(this.myForm.value).subscribe({

        next:(data:any)=>{
          //Salio todo bien
          console.log(data)
          alert('Gracias por Registrarse!')
          this.route.navigate(['/login'])},
          error: (err:any)=>{
            //En caso de error
            alert(err.error.msg)
        }
   })
  }

  ngOnInit(): void {
  }

}