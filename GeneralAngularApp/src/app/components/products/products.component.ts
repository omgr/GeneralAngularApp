import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../../services/http-calls/http-calls.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:[HttpCallsService]
})
export class ProductsComponent implements OnInit {

  constructor(private httpService:HttpCallsService) { }

  ngOnInit(): void {
  }

  public products:Products = new Products();
  TestGet(){
    this.httpService.getCall("http://localhost:4200/api/Products",(data:Products)=>{
      this.products.value=data.value;
      console.log(this.products);
    });
  }

}

class Products{
  public value:any[] = [];
}
