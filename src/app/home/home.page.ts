import {Component, OnInit} from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { LaunchesService } from 'src/app/services/spacex-api/launches.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  launch: Launch;
  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getNextUpcomingLaunch().subscribe(result => {
      this.launch = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getNextUpcomingLaunch().subscribe(result => {
      this.launch = result;
      event.target.complete();
    });
  }
}
