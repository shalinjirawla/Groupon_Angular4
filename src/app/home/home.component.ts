import { Component, OnInit } from '@angular/core';
import { DealService } from '../Services/Deal.Service';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Deal } from '../Model/Deal.Model';
import { Observable } from 'rxjs/Rx'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  HotDeal = [];
  NewPrice;
  TrendDeal = [];
  RecommendDeal = [];
  RecentlyDeal = [];
  user_photo : SafeResourceUrl;
  Deals : Deal;
  photo = [];
  getRespone;


  constructor(private dealService : DealService,
              private http: Http,
              private route: ActivatedRoute,
              private router: Router,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getHOTDeal();
    this.getTRENDDeal();
    this.getRECOMMENDDeal();
    this.getRECENTDeal();
  }

  getHOTDeal(){
    this.dealService.getHotDeals().subscribe((abc : Deal[] )=>{
      this.HotDeal = abc;
    });
  }

  getTRENDDeal(){
    this.dealService.getTrendingDeals().subscribe((abc : any[] )=>{
      this.TrendDeal = abc;
    });
  }

  getRECOMMENDDeal(){
    this.dealService.getRecommendedDeals().subscribe((abc : any[] )=> {
      this.RecommendDeal = abc;
    });
  }

  getRECENTDeal(){
    this.dealService.getRecentlyDeals().subscribe((abc : Deal[])=>{
      this.RecentlyDeal = abc;
    });
  }

  PDetails(id){
    localStorage.setItem("DealID",id);
  }
 

}
