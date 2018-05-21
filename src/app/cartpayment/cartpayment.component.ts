import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OffersService } from '../Services/Offers.Service';
import { Cart, ListCart, UpdateCart } from '../Model/Cart.Model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DealCodeService } from '../Services/DealCode.Service';
import { CartService } from '../Services/Cart.Service';
import { DealCode } from '../Model/DealCode.Model';


@Component({
  selector: 'app-cartpayment',
  templateUrl: './cartpayment.component.html',
  styleUrls: ['./cartpayment.component.css']
})
export class CartpaymentComponent implements OnInit {
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  PaymentDetailForm: FormGroup;
  cartModel: Cart;
  oid;
  did;
  uid;
  Cartitem;
  display: boolean = false;
  UserCartList = [];
  UpdateCartModel: UpdateCart;
  @ViewChild('modal2') public modal2;
  PlusMinusId: string;
  CartItemForm: FormGroup;
  Price;
  Price1;
  Discount;
  Discount1;
  Vals: boolean = false;;
  totalsavs;
  totalmoney: number;
  DealCodeModel: DealCode;
  codeMsg: boolean = false;
  errorMsg: boolean = false;
  ErrorMsg = "";
  newPrice: number = 0;
  allItemMsg: boolean = false;
  tempoffer = [];
  CouponcodeDiscount: number = 0;
  promocode = "";


  constructor(private formBuilder: FormBuilder,
    private offerService: OffersService,
    private dealcodeService: DealCodeService,
    private cartService: CartService,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.PaymentDetailForm = this.formBuilder.group({
      CardName: [''],
      CardNumber: [''],
      CVV: ['', [Validators.required, Validators.maxLength(4)]]
    });

    this.oid = localStorage.getItem("offerrID");
    this.did = localStorage.getItem("DealID");
    this.uid = localStorage.getItem("LoginUser");
    this.GetUserCartItem(this.uid);
  }

  GiftForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    RecipientEmail: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required),
    DateToSend: new FormControl('', Validators.required),
    Total: new FormControl('', Validators.required)
  });

 
 // This function plus user item Qty in cart
  Plus(plusid, indexi) {
   this.Vals = true;
    this.PlusMinusId = plusid;
    for (var i = 0; i < this.UserCartList.length; i++) {
      if (i == indexi) {
        if (this.UserCartList[indexi].Price == 0) {
          this.Price1 = this.UserCartList[indexi].Price1;
          this.Discount1 = this.UserCartList[indexi].Discount1;
        } else {
          this.Price = this.UserCartList[indexi].Price;
          this.Discount = this.UserCartList[indexi].Discount;
        }
      }
    }
    this.UpdateCardItem();
  }

 // This function minus user item Qty in cart
  Minus(minusid, indexi) {
    this.Vals = false;
    this.PlusMinusId = minusid;
    for (var i = 0; i < this.UserCartList.length; i++) {
      if (i == indexi) {
        if (this.UserCartList[indexi].Price == 0) {
          this.Price1 = this.UserCartList[indexi].Price1;
          this.Discount1 = this.UserCartList[indexi].Discount1;
        } else {
          this.Price = this.UserCartList[indexi].Price;
          this.Discount = this.UserCartList[indexi].Discount;
        }
      }
    }
    this.UpdateCardItem();
  }

 // This function get all cart item of user 
 GetUserCartItem(id) {
    this.cartService.getDealByID(id).subscribe(response => {
      this.UserCartList = response;
      console.log(response);
      let sum = 0;
      for (var i = 0; i < response.length; i++) {
        if (response[i].Total) {
          sum += response[i].Total;
        }
        this.totalmoney = sum;
      }
      let ordersave = 0;
      for (var i = 0; i < response.length; i++) {
        if (response[i].Price == 0) {
          ordersave += (response[i].Price1 * response[i].Qty) - response[i].Total;
        } else {
          ordersave += (response[i].Price * response[i].Qty) - response[i].Total;
        }
      }
      this.totalsavs = ordersave;
      if (this.promocode != "") {
        this.CouponCodeApply(this.promocode);
      }
    });
  }

  //This function delete user cart item
  emptycart(deleteid) {
    this.cartService.deleteCartItemByID(deleteid).subscribe(response => {
      this.GetUserCartItem(this.uid);
    });
  }

 
 //This function update user cart item when plus or minus Qty 
  UpdateCardItem() {
    let CartID = this.PlusMinusId;
    let NewPrice1 = (this.Price1 / 100) * (100 - this.Discount1);
    let NewPrice = (this.Price / 100) * (100 - this.Discount);

    let FinalPRice = NewPrice > 0 ? NewPrice : NewPrice1;
    let data = Object.assign({}, this.UpdateCartModel, {
      ID: CartID,
      Status: this.Vals,
      Total: FinalPRice
    });
    this.cartService.UpdateCartQty(data).subscribe(response => {
      this.GetUserCartItem(this.uid);
      this.Vals = false;
      this.PlusMinusId = "";
      this.Price = 0;
      this.Price1 = 0;
      this.Discount = 0;
      this.Discount1 = 0;
      });
  }


  //This function use for remove cart coupon code and revert amount.
  removeCouponCode() {
    this.GetUserCartItem(this.uid);
    this.codeMsg = false;
    this.allItemMsg = false;
    this.tempoffer = [];
    this.CouponcodeDiscount = 0;
    this.promocode = "";
  }

  //This function use for apply coupon code 
  CouponCodeApply(promocode) {
    this.promocode = promocode;
    this.ErrorMsg = "";
    this.codeMsg = false;
    let data = Object.assign({}, this.DealCodeModel, {
      UserID: this.uid,
      Code: this.promocode
    });
    this.dealcodeService.ApplyCode(data).subscribe(response => {
      let a = JSON.parse(JSON.stringify(response));
      if (a[0].Discount == 0) {
        this.ErrorMsg = a[0].Message;
        this.errorMsg = true;
      }
      else {
        this.CouponcodeDiscount = a[0].Discount;
        this.codeMsg = true;
        for (var i = 0; i < a.length; i++) {
          if (a[i].OfferID != "" && a[i].OfferID != null) {
            for (var j = 0; j < this.UserCartList.length; j++) {
              if (a[i].OfferID == this.UserCartList[j].OfferID) {

                let dis = (this.UserCartList[j].Total / 100) * a[i].Discount;
                this.UserCartList.forEach(element => {
                  if (element.OfferID == a[i].OfferID) {
                    element.Total = element.Total - dis;
                    this.totalmoney = this.totalmoney - dis;
                    this.totalsavs = this.totalsavs + dis;
                    this.tempoffer.push(a[i].OfferID);
                  }
                });
              }
            }
          }
          else if (a[i].DealID != "" && a[i].DealID != null) {
            for (var j = 0; j < this.UserCartList.length; j++) {
              if (a[i].DealID == this.UserCartList[j].DealID) {
                let dis = (this.UserCartList[j].Total / 100) * a[i].Discount;
                this.UserCartList.forEach(element => {
                  if (element.DealID == a[i].DealID) {
                    element.Total = element.Total - dis;
                    this.totalmoney = this.totalmoney - dis;
                    this.totalsavs = this.totalsavs + dis;
                    this.tempoffer.push(a[i].DealID);
                  }
                }
                )
              }
            }
          }
          else {
            for (var n = 0; n < this.UserCartList.length; n++) {
              let dis = (this.UserCartList[n].Total / 100) * this.CouponcodeDiscount;
              this.UserCartList[n].Total = this.UserCartList[n].Total - dis;
              this.totalmoney -= dis;
              this.totalsavs += dis;
              this.allItemMsg = true;
            }
          }
        }
      }
    });

  }

  opnPOP() {
    this.modal2.show();
  }

}
