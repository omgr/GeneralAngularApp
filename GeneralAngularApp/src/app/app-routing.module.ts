import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {path:'',redirectTo:'/products', pathMatch:'full'},
  {path:'',component:HeaderComponent, outlet:'header'},
  {path:'',component:FooterComponent, outlet:'footer'},
  {path:'products', component:ProductsComponent, children:[ ]},
  {path:'test', component:TestComponent, children:[ ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
