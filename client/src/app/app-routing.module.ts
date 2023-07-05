import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  { path: "alta", component: RegistroComponent },
  { path: "login", component: LoginComponent },
  { path: "producto/:id", component: DetalleComponent },
  { path: "nosotros", component: NosotrosComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
