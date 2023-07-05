import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductosService } from 'src/app/Services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  opciones=[
    {path:"/",name:"Home"},
    {path:"/login",name:"Login"},
    {path:"/registro",name:"Registro"}
  ]
  isLogin:any;
  constructor(private auth:AuthService) { 
    this.auth.isAuthenticate().subscribe((state)=>{
      this.isLogin=state
      if(state){
        
        this.opciones=[
          {path:"/",name:"Home"}
        ]
      }else{
        this.opciones=[
          {path:"/",name:"Home"},
          {path:"/login",name:"Login"},
          {path:"/registro",name:"Registro"}
        ]
      }
    })
  }
  logout(){
    this.auth.logout()
  }
  ngOnInit(): void {
  }


  private breakpointObserver = inject(BreakpointObserver);
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  
  
}
