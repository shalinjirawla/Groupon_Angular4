import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { DealService } from '../Services/Deal.Service';
import { Observable } from 'rxjs/Rx'; 
import { Deal, AllDeal } from '../Model/Deal.Model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  getResponse = [];
  hotDeal = [];
  Q = 1;

  constructor(private dealService : DealService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CheckID();
    this.getHOTDeal();
  }

  CheckID(){
    var id = localStorage.getItem("DealID");
    if(id != null){
      this.PDetails(id);
    }
  }

  getHOTDeal(){
    this.dealService.getHotDeals().subscribe((abc : Deal[] )=>{
      this.hotDeal = abc;
    });
  }

  changetab(liid,divid){
        let div = document.getElementById(divid);
        let tab = document.getElementsByClassName("detailpane");
        let li = document.getElementById(liid);
        for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }
      li.className+=" active";
      let tabcontent = document.getElementsByClassName("tabcontent");
      for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("active");
          }
      div.className+=" active";
  }

  Plus(){
    if(this.Q <= 9){
      this.Q = 1 + this.Q++;
    }
    
  }
  Minus(){
    if(this.Q >= 1)
    this.Q--
  }


  PDetails(id){
    if(id != null){
      this.dealService.getDealByID(id).subscribe((abc : AllDeal[])=>{
       this.getResponse = abc;
       localStorage.setItem("DealID",id);
      });
    }
  }
}
