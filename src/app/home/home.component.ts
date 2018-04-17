import { Component, OnInit } from '@angular/core';
import { DealService } from '../Services/Deal.Service';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Deal, AllDeal } from '../Model/Deal.Model';
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
  hotstarss = [];
  trendstarss = [];
  recomstarss = [];
  recentstarss = [];
  starTotal;


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
    this.dealService.getHotDeals().subscribe((abc : AllDeal[] )=>{
      this.HotDeal = abc;
      
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

  getTRENDDeal(){
    this.dealService.getTrendingDeals().subscribe((abc : AllDeal[] )=>{
      this.TrendDeal = abc;

      let data = JSON.parse(JSON.stringify(abc));
      for(var c = 0; c < data.length; c++ ){
        var da = data[c].AverageRating;
        let star = Math.floor(da);
        let a = da % 1;
        var i = 0;
        this.trendstarss.push([]);
        for (i = 0; i < star; i++) {
          this.trendstarss[c].push({ No: i, Value: "Full" });
        }
        if (a != 0) {
          this.trendstarss[c].push({ No: i + 1, Value: "Half" });
          for (var t = 0; t < 5 - this.trendstarss[c].length; t++) {
            this.trendstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
        else {
          for (var t = 0; t < 5 - this.trendstarss[c].length; t++) {
            this.trendstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
      }
    });
  }

  getRECOMMENDDeal(){
    this.dealService.getRecommendedDeals().subscribe((abc : AllDeal[] )=> {
      this.RecommendDeal = abc;

      let data = JSON.parse(JSON.stringify(abc));
      for(var c = 0; c < data.length; c++ ){
        var da = data[c].AverageRating;
        let star = Math.floor(da);
        let a = da % 1;
        var i = 0;
        this.recomstarss.push([]);
        for (i = 0; i < star; i++) {
          this.recomstarss[c].push({ No: i, Value: "Full" });
        }
        if (a != 0) {
          this.recomstarss[c].push({ No: i + 1, Value: "Half" });
          for (var t = 0; t < 5 - this.recomstarss[c].length; t++) {
            this.recomstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
        else {
          for (var t = 0; t < 5 - this.recomstarss[c].length; t++) {
            this.recomstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
      }
    });
  }

  getRECENTDeal(){
    this.dealService.getRecentlyDeals().subscribe((abc : AllDeal[])=>{
      this.RecentlyDeal = abc;

      let data = JSON.parse(JSON.stringify(abc));
      for(var c = 0; c < data.length; c++ ){
        var da = data[c].AverageRating;
        let star = Math.floor(da);
        let a = da % 1;
        var i = 0;
        this.recentstarss.push([]);
        for (i = 0; i < star; i++) {
          this.recentstarss[c].push({ No: i, Value: "Full" });
        }
        if (a != 0) {
          this.recentstarss[c].push({ No: i + 1, Value: "Half" });
          for (var t = 0; t < 5 - this.recentstarss[c].length; t++) {
            this.recentstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
        else {
          for (var t = 0; t < 5 - this.recentstarss[c].length; t++) {
            this.recentstarss[c].push({ No: i + 1, Value: "O" });
          }
        }
      }
    });
  }

  PDetails(id){
    localStorage.setItem("DealID",id);
    location.reload();
  }
 

}
