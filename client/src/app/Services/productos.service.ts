import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map} from 'rxjs';
import { Producto } from 'src/app/Interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

    getAll():Promise <Producto[]>{
      return lastValueFrom( this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=sofa").pipe(map((value:any)=>value.results)))
    }

    getProductos(nombreProducto:String):Promise <Producto[]>{
      console.log(this.http.get("https://api.mercadolibre.com/sites/MLA/search?q="+nombreProducto))
      return lastValueFrom (this.http.get<Producto>("https://api.mercadolibre.com/sites/MLA/search?q="+nombreProducto).pipe(map((value:any)=>value.results)))
    }

    getBtId(id:string): Promise<Producto>{
      return lastValueFrom( this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}`))
    }

    getDescription(id:string){
      return lastValueFrom( this.http.get(`https://api.mercadolibre.com/items/${id}/description`))
    }

    create(payload:any){
      return lastValueFrom( this.http.post(`https://api.mercadolibre.com/items/`, payload)) 
    }

    update(id:string, payload:any){
      return lastValueFrom( this.http.put(`https://api.mercadolibre.com/items/${id}`, payload)) 
    }

    delete(id:string){
      return lastValueFrom( this.http.delete(`https://api.mercadolibre.com/items/${id}`)) 
    }

}
