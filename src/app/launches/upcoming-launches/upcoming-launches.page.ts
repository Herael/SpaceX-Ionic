import { Component, OnInit } from "@angular/core";
import { Launch } from "src/app/models/launch.model";
import { LaunchesService } from "src/app/services/spacex-api/launches.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-upcoming-launches",
  templateUrl: "./upcoming-launches.page.html",
  styleUrls: ["./upcoming-launches.page.scss"]
})
export class UpcomingLaunchesPage implements OnInit {
  launches: Launch[];
  constructor(
    private router: Router,
    private launchesService: LaunchesService
  ) {}

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
  openDetailsWithState(launche) {
    let navigationExtras: NavigationExtras = {
      state: {
        launch: launche
      }
    };
    this.router.navigate(["upcoming-detail"], navigationExtras);
  }
}
