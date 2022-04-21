import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any=[];
  public grandtotal!: number; 
  constructor( private cartservice: CartService) { }

  ngOnInit(): void {
     this.cartservice.getProducts()
     .subscribe(res=> {
      this.products =res;
      this.grandtotal=this.cartservice.getTotalPrice();
     }
      )
  }

  removeItem(item:any){
    this.cartservice.removeCartItem(item);

  }

  emptycart(){
    this.cartservice.removeAllCart();
  }

}
