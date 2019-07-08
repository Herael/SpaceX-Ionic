import { Component, OnInit } from "@angular/core";
import { Launch } from "src/app/models/launch.model";
import { ActivatedRoute, Router } from "@angular/router";
import { LaunchesService } from "src/app/services/spacex-api/launches.service";

@Component({
  selector: "app-past-detail",
  templateUrl: "./past-detail.page.html",
  styleUrls: ["./past-detail.page.scss"]
})
export class PastDetailPage implements OnInit {
  data: any;
  launch: Launch;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private launchService: LaunchesService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.launch;
    console.log(this.data);
  }

  ngOnInit() {
    console.log(this.data.flight_number);

    this.launchService.getLaunch(this.data.flight_number).subscribe(result => {
      this.launch = result;
    });
  }
  doRefresh(event: any) {
    this.launchService.getLaunch(this.data.flight_number).subscribe(result => {
      this.launch = result;
      event.target.complete();
    });
  }
}
