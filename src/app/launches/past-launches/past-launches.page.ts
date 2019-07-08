import { Component, OnInit } from "@angular/core";
import { Launch } from "src/app/models/launch.model";
import { LaunchesService } from "src/app/services/spacex-api/launches.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-past-launches",
  templateUrl: "./past-launches.page.html",
  styleUrls: ["./past-launches.page.scss"]
})
export class PastLaunchesPage implements OnInit {
  launches: Launch[];

  constructor(
    private router: Router,
    private launchesService: LaunchesService
  ) {}

  ngOnInit() {
    this.launchesService.getPastLaunches().subscribe(result => {
      this.launches = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getPastLaunches().subscribe(result => {
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
    this.router.navigate(["past-detail"], navigationExtras);
  }
}
