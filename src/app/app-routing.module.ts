import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ViewtrendingComponent } from './viewtrending/viewtrending.component';
import { ViewtheatreComponent } from './viewtheatre/viewtheatre.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'movie/:type/:id', component:MovieComponent},
  {path: 'viewall',component:ViewallComponent},
  {path: 'viewtrending',component:ViewtrendingComponent},
  {path: 'viewtheatre',component:ViewtheatreComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
