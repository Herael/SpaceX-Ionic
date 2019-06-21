import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcomingLaunchesPage } from './upcoming-launches.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingLaunchesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpcomingLaunchesPage]
})
export class UpcomingLaunchesPageModule {}
