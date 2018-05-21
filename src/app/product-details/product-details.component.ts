import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { DealService } from '../Services/Deal.Service';
import { Observable } from 'rxjs/Rx';
import { Deal, AllDeal } from '../Model/Deal.Model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomReview, DealRecom } from '../Model/DealReview.Model';
import { DealReviewService } from '../Services/DealReview.Service';
import { DealLikeService } from '../Services/DealLike.Service';
import { DealRecomService } from '../Services/DealRecom.Service';
import { OffersService } from '../Services/Offers.Service';
import { DealLike } from '../Model/DealLike.Model';
import { Offers } from '../Model/Offers.Model';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../Services/Cart.Service';
import { Cart } from '../Model/Cart.Model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  getResponse = [];
  hotDeal = [];
  Q = 1;
  Count;
  Review = [];
  average = [];
  totalRating;
  DealLikeModel: DealLike;
  status;
  offerDeal = [];
  starTotal;
  starss = [];
  hotstarss = [];
  reviewstarss = [];
  @ViewChild('modal1') public modal1;
  offerlength;
  temporaryRadioID : string;
  ProductPrice;
  ResponsePrice;
  Addcartitem;
  

  constructor(private dealService: DealService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer,
    private dealReviewService: DealReviewService,
    private dealLikeService: DealLikeService,
    private dealRecomService: DealRecomService,
    private offersService: OffersService,
    private formBuilder: FormBuilder,
    private cartService : CartService) { }

    ProductDetailForm : FormGroup;
    CartModel : Cart;

  ngOnInit() {
    this.CheckID();
    this.getHOTDeal();
    this.CheckStatus();
  }


   GiftForm = new FormGroup({
     Name : new FormControl('',Validators.required),
     RecipientEmail  : new FormControl('',Validators.required),
     Message : new FormControl('',Validators.required),
     DateToSend : new FormControl('',Validators.required),
     Total : new FormControl('',Validators.required)
   });

  CheckID() {
    var id = localStorage.getItem("DealID");
    if (id != null) {
      this.PDetails(id);
      this.getDealReview(id);
      this.getAverage(id);
      this.DealOffer(id);
    }
  }

  getHOTDeal() {
    this.dealService.getHotDeals().subscribe((abc: AllDeal[]) => {
      this.hotDeal = abc;

      let data = JSON.parse(JSON.stringify(abc));
      for(var c = 0; c < data.length; c++ ){
        var da = data[c].AverageRating;
        let star = Math.floor(da);
        let a = da % 1;
        var i = 0;
        this.hotstarss.push([]);
        for (i = 0; i < star; i++) {
          this.hotstarss[c].push({ No: i, Value: "Full" });
        }
        if (a != 0) {
          this.hotstarss[c].push({ No: i + 1, Value: "Half" });
          for (var t = 0; t < 5 - this.hotstarss[c].length; t++) {
            this.hotstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
        else {
          for (var t = 0; t < 5 - this.hotstarss[c].length; t++) {
            this.hotstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
      }
    });
  }

  GetUserCartItem(UID){
    this.cartService.getDealByID(UID).subscribe(response => {
      this.Addcartitem = response;
      this.router.navigate(['/CartPayment']);
    });
  }

  getDealReview(id) {
    this.dealReviewService.getDealByID(id).subscribe((abc: CustomReview[]) => {
      this.Review = abc;
      this.totalRating = abc[0].TotalRating;
      
      let data = JSON.parse(JSON.stringify(abc));
      for(var c = 0; c < data.length; c++ ){
        var da = data[c].Rating;
        let star = Math.floor(da);
        let a = da % 1;
        var i = 0;
        this.reviewstarss.push([]);
        for (i = 0; i < star; i++){ 
            if (a == 0)  
            {
              this.reviewstarss[c].push({ No: i, Value: "Full" });
           }
        }
          let r = 5 - star;
          for(let k=0; k < r; k++) 
          {
            this.reviewstarss[c].push({ No: "0", Value: "O" });
          }
        }
      });
    }

  DealOffer(id) {
    this.offersService.getOfferDealByID(id).subscribe((abc: Offers[]) => {
      this.offerDeal = abc;
      this.temporaryRadioID = abc[0].ID;
      let p = abc[0].Price;
      let d = abc[0].Discount;
      this.ProductPrice = (p / 100) * (100 - d);
      this.offerlength = abc;
    });
  }

  CheckStatus() {
    let DID = localStorage.getItem("DealID");
    let UID = localStorage.getItem("LoginUser");

    let data = Object.assign({}, this.DealLikeModel, {
      DealID: DID,
      UserID: UID,
    });
    this.dealLikeService.checkStatus(data).subscribe((response: DealLike[]) => {
      let res = JSON.stringify(response);
      this.status = JSON.parse(res).LikeStatus;
    });
  }

  

  changetab(liid, divid) {
    let div = document.getElementById(divid);
    let tab = document.getElementsByClassName("detailpane");
    let li = document.getElementById(liid);
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove("active");
    }
    li.className += " active";
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
    div.className += " active";
  }

  getAverage(id) {
    this.dealReviewService.getAverageRate(id).subscribe((abc: DealRecom[]) => {
      this.average = abc;
      this.starss = [];
      let data = JSON.parse(JSON.stringify(abc));
      this.starTotal = data.AverageRating;
      let star = Math.floor(this.starTotal);
      let a = data.AverageRating % 1;
      var i = 0;
      for (i = 0; i < star; i++) {
        this.starss.push({ No: i, Value: "Full" });
      }
      if (a != 0) {
        this.starss.push({ No: i + 1, Value: "Half" });
        for (var t = 0; t < 5 - this.starss.length; t++) {
          this.starss.push({ No: i + 1, Value: "O" });
        }
      }
      else {
        for (var t = 0; t < 5 - this.starss.length; t++) {
          this.starss.push({ No: i + 1, Value: "O" });
        }
      }
   });
  }

  Plus() {
    if (this.Q <= 9) {
      this.Q = 1 + this.Q++;
    }
  }
  Minus( ) {
    if (this.Q >= 2)
      this.Q--
  }

  Details(id) {
    localStorage.setItem("DealID", id);
    location.reload();
  }

  DealLike(id) {
    this.status = this.status == 0 ? 1 : 0;

    let DID = localStorage.getItem("DealID");
    let UID = localStorage.getItem("LoginUser");

    let data = Object.assign({}, this.DealLikeModel, {
      DealID: DID,
      UserID: UID,
      LikeStatus: this.status
    });
    this.dealLikeService.dealLike(data).subscribe(response => {
      this.getAverage(DID);
    });

  }

  getItemID(id,radioi){
    this.temporaryRadioID = id;
    for(var i = 0; i < this.offerDeal.length; i++){
      if(i == radioi){
        if(this.offerDeal[radioi]){
          let Price = this.offerDeal[radioi].Price;
          let Discount = this.offerDeal[radioi].Discount;
          this.ProductPrice = (Price / 100) * (100 - Discount);
        }
      }
  }
}

  CartItem(){

    let UID = localStorage.getItem("LoginUser");
    let DID = localStorage.getItem("DealID");
    
      if(this.offerlength != undefined && this.offerlength.length > 0){
        
        
        let total = this.Q * this.ProductPrice;


        let data = Object.assign({}, this.CartModel, {
          UserID : UID,
          OfferID : this.temporaryRadioID,
          Qty : this.Q,
          Total : total
        });
      
        this.cartService.InsertCartItem(data).subscribe(response => {
          this.temporaryRadioID = "";
          this.ProductPrice = null;
          this.ResponsePrice = null;
          this.Q = 1;
          this.GetUserCartItem(UID);
        });
       
      }
      else
      {
         let total = this.Q * this.ResponsePrice;
        let data = Object.assign({}, this.CartModel, {
          UserID : UID,
          Qty : this.Q,
          DealID : DID,
          Total : total
        });
        
        this.cartService.InsertCartItem(data).subscribe(response =>{
          this.temporaryRadioID = "";
          this.ProductPrice = null;
          this.ResponsePrice = null;
          this.Q = 1;
          this.GetUserCartItem(UID);
        });
        
      }
    }

  PDetails(id) {
    if (id != null) {
      this.dealService.getDealByID(id).subscribe((abc: AllDeal[]) => {
        this.getResponse = abc;
        let Result = JSON.parse(JSON.stringify(abc));
        let p = Result.Price;
        let d = Result.Discount;
        this.ResponsePrice = (p / 100) * (100 - d);
        localStorage.setItem("DealID", id);
      });
    }
  }

  opnPOP(){
    this.modal1.show();
  } 
}
