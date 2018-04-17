import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule,HeaderComponent,FooterComponent } from './shared';
import { routing } from './app.routing';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationService } from './Services/Registration.Service';
import { MyDatePickerModule } from 'mydatepicker';
import { CategoryService } from './Services/Category.Service';
import { LocationService } from './Services/Location.Service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { LoginService } from './Services/Login.Service';
import { FileUploadModule } from 'ng2-file-upload';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import { StickyModule } from 'ng2-sticky-kit';
import { DealComponent } from './deal/deal.component';
import { DealService } from './Services/Deal.Service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DealReviewService } from './Services/DealReview.Service';
import { TimeAgoPipe } from 'time-ago-pipe';
import { DealLikeService } from './Services/DealLike.Service';
import { DealRecomService } from './Services/DealRecom.Service';
import { OffersService } from './Services/Offers.Service';
import { PopupModalComponent } from './popup.component';
import { CartpaymentComponent } from './cartpayment/cartpayment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from './Services/Cart.Service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent,
    DealComponent,
    ProductDetailsComponent,
    TimeAgoPipe,
    PopupModalComponent,
    CartpaymentComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MyDatePickerModule,
    Ng2AutoCompleteModule,
    FileUploadModule,
    StickyModule,
    NgbModule,
    
  ],
  providers: [ RegistrationService, CategoryService, LocationService, LoginService,{ provide: LocationStrategy, useClass: HashLocationStrategy }, DealService, 
  DealReviewService, DealLikeService, DealRecomService, OffersService, CartService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
