import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Mission } from "src/app/models/missions.model";
import { MissionsService } from "src/app/services/spacex-api/missions.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  data: any;
  mission: Mission;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private missionsService: MissionsService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.mission;
    console.log(this.data);
  }

  ngOnInit() {
    console.log(this.data.mission_id);

    this.missionsService.getMission(this.data.mission_id).subscribe(result => {
      this.mission = result;
    });
  }
  doRefresh(event: any) {
    this.missionsService.getMission(this.data.mission_id).subscribe(result => {
      this.mission = result;
      event.target.complete();
    });
  }
}
