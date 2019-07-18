import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HistoricalEventsPage } from './historical-events.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HistoricalEventsPage
      },
      
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoricalEventsPage]
})
export class HistoricalEventsPageModule { }
