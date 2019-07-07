import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';
import { IonicModule } from '@ionic/angular';
import { LaunchComponent } from 'src/app/components/launch/launch.component';
import {CountdownComponent} from '../../components/countdown/countdown.component';

@NgModule({
  declarations: [
    SkeletonComponent,
    LaunchComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SkeletonComponent,
    LaunchComponent,
    CountdownComponent
  ]
})
export class ComponentsModule { }
