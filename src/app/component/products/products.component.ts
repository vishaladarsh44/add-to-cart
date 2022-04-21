import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productlist: any ;
  constructor(private api:ApiService , private cartservice: CartService) { }



  ngOnInit(): void {
    this.api.getPrduct()
    .subscribe(res => {
      this.productlist = res;

      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    })
  }
 addtocart(item:any){
   this.cartservice.addtocart(item);
 }
}
