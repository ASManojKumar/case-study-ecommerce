import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@NgModule({
  declarations: [
    ProfileDetailsComponent,
    FavoritesComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
