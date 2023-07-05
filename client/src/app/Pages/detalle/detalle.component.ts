import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/Services/productos.service';
import { Producto} from 'src/app/Interfaces/Productos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
  
})
export class DetalleComponent {

  producto!: Producto
    loading=true
      constructor(private activatedRoute: ActivatedRoute, private productosServices: ProductosService){
       const id =  this.activatedRoute.snapshot.paramMap.get("id")
        if(id)this.init(id)
      }

      async init(id:string){
        try{
          const producto:Producto = await this.productosServices.getBtId(id)
          const description = await this.productosServices.getDescription(id)
          this.producto={...producto, ...description}
          this.loading = false
        }catch(error){
          console.log(error)
        }
      }
      
    selectedIndex = 0;
    @Input() indicators = true;
    @Input() controls = true;

    selectImage(index: number): void{
       this.selectedIndex = index;
    }

    onPrevClick(): void{
      if(this.selectedIndex === 0 ){
        this.selectedIndex = this.producto.pictures.length -1;
      }else{
        this.selectedIndex--;
      }
    }

    
    onNextClick(): void{
      if(this.selectedIndex === this.producto.pictures.length -1 ){
        this.selectedIndex = 0;
      }else{
        this.selectedIndex++;
      }
    }
}
