import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDisplayComponent } from './product-display/product-display.component';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
