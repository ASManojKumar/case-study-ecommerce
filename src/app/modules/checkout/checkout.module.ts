import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagComponent } from './bag/bag.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    BagComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
