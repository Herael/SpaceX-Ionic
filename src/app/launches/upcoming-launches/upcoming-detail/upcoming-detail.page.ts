import { Component, OnInit } from "@angular/core";
import { Launch } from "src/app/models/launch.model";
import { LaunchesService } from "src/app/services/spacex-api/launches.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-upcoming-detail",
  templateUrl: "./upcoming-detail.page.html",
  styleUrls: ["./upcoming-detail.page.scss"]
})
export class UpcomingDetailPage implements OnInit {
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
