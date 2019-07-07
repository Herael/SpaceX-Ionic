import { Component, OnInit } from '@angular/core';
import { Mission } from 'src/app/models/missions.model';
import { MissionsService } from 'src/app/services/spacex-api/missions.service';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})

export class MissionsPage implements OnInit {

  constructor(private router: Router,private missionsService: MissionsService) { }
  missions: Mission[];


  ngOnInit() {
    this.missionsService.getAllMissions().subscribe(result => {
      this.missions = result;
    });
  }
  doRefresh(event: any) {
    this.missionsService.getAllMissions().subscribe(result => {
      this.missions = result;
      event.target.complete();
    });
  }

  openDetailsWithState(mission) {
    let navigationExtras: NavigationExtras = {
      state: {
        mission: mission
      }
    };
    this.router.navigate(['detail'], navigationExtras);
  }
  
}
