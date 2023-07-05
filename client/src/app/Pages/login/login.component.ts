import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup
  constructor(
    private auth:AuthService, private fb:FormBuilder, private router:Router,
  ) {
    this.myForm = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })

   }
   login(){
    console.log(this.myForm.value)
    this.auth.login(this.myForm.value).subscribe((data:any)=>{
      localStorage.setItem('token', data['token'])
      this.auth.authenticate();
      //Metodo para redirigir
      alert('Bienvenido!')
      this.router.navigate(['/'])
    })
  }

  ngOnInit(): void {
  }

  
  onSubmit(): void {
    alert('Thanks!');
  }

}






