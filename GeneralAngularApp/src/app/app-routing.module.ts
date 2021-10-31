import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'',component:HeaderComponent, outlet:'header'},
  {path:'',component:FooterComponent, outlet:'footer'},
  {path:'login', component:LoginComponent, children:[ ]},
  {path:'products', component:ProductsComponent, children:[ ]},
  {path:'test', component:TestComponent, children:[ ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
