import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { NgProgress } from "@ngx-progressbar/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  selectedPath: string;
  pages = [
    {
      title: "Home",
      url: "/menu/home",
      activated: true
    },
    {
      title: "Launches",
      url: "/menu/launches",
      activated: true
    },
    {
      title: "Missions",
      url: "/menu/missions",
      activated: true
    },{
      title: "History",
      url: "/menu/history",
      activated: true
    }

    // {
    //   title: 'Second Page blank',
    //   url: '/menu/second',
    //   activated: true
    // }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}
}
