import { Routes, RouterModule } from '@angular/router';

import { FooterComponent,HeaderComponent } from './shared';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductDetailsComponent  } from './product-details/product-details.component';

const appRouting : Routes = [
    { path:'', component: HomeComponent , },
    { path:'SignUp', component: SignUpComponent },
    { path:'LogIn', component: LogInComponent  },
    { path:'Product-Details', component: ProductDetailsComponent }
];

export const routing = RouterModule.forRoot(appRouting);