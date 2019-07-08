import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcomingDetailPage } from './upcoming-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpcomingDetailPage]
})
export class UpcomingDetailPageModule {}
