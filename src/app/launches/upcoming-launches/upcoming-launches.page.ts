import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { LaunchesService } from 'src/app/services/spacex-api/launches.service';

@Component({
  selector: 'app-upcoming-launches',
  templateUrl: './upcoming-launches.page.html',
  styleUrls: ['./upcoming-launches.page.scss'],
})
export class UpcomingLaunchesPage implements OnInit {
  launches: Launch[];
  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getUpcomingLaunches().subscribe(result => {
      this.launches = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getUpcomingLaunches().subscribe(result => {
      this.launches = result;
      event.target.complete();
    });
  }
}
