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
import { Ng2CompleterModule } from "ng2-completer";
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { LoginService } from './Services/Login.Service';
import { FileUploadModule } from 'ng2-file-upload';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import { StickyModule } from 'ng2-sticky-kit';
import { DealComponent } from './deal/deal.component';
import { DealService } from './Services/Deal.Service';
import { ProductDetailsComponent } from './product-details/product-details.component';


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
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MyDatePickerModule,
    Ng2CompleterModule,
    Ng2AutoCompleteModule,
    FileUploadModule,
    Angular2FontawesomeModule,
    StickyModule
  ],
  providers: [ RegistrationService, CategoryService, LocationService, LoginService,{ provide: LocationStrategy, useClass: HashLocationStrategy }, DealService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
