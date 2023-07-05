import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';
import { Producto } from 'src/app/Interfaces/Productos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreProducto = ""
  productos:Promise <Producto[]>
  myForm:FormGroup
  constructor(private productosService: ProductosService,  private auth:AuthService, private fb:FormBuilder){
    this.productos = this.productosService.getAll();
    this.myForm = this.fb.group({   
      empresa:["",[Validators.required]],
      email:["",[Validators.required]],
      mensaje:["",[Validators.required]],
      nombres:["",[Validators.required]],
      apellidos:["",[Validators.required]],
      telefono:["",[Validators.required]],
    })
  }

  contacto(){
    console.log(this.myForm.value)
    //EJEMPLO CON ERROR EN OBSERVABLE
    this.auth.contacto(this.myForm.value).subscribe((data:any)=>{
      //Salio todo bien
      console.log(data)
      alert('Su mensaje se ha enviado correctamente!')
      },err=>{
        //En caso de error
        alert(err.error.msg)
    })
  }

  ngOnInit(): void {
  }

  obtenerProductos(){
   
   this.productos = this.productosService.getProductos(this.nombreProducto)

   console.log(this.productos) 

  }

 

}
