import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EncryptionService } from './services/encryption.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoggedOffGuard } from './logged-off.guard';


const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent, canActivate: [LoggedOffGuard]},
  {path: 'order-history', component: OrderHistoryComponent, canActivate: [LoggedOffGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [LoggedOffGuard]},
  {path: 'cart-details', component: CartDetailsComponent, canActivate: [LoggedOffGuard]},
  {path: 'products/:id', component: ProductDetailsComponent, canActivate: [LoggedOffGuard]},
  {path: 'search/:keyword', component: ProductListComponent, canActivate: [LoggedOffGuard]},
  {path: 'category/:id', component: ProductListComponent, canActivate: [LoggedOffGuard]},
  {path: 'category', component: ProductListComponent, canActivate: [LoggedOffGuard]},
  {path: 'products', component: ProductListComponent, canActivate: [LoggedOffGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }



