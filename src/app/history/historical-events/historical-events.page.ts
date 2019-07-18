import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/spacex-api/history.service';
import { Observable } from 'rxjs';
import { GroupedEvents } from 'src/app/models/event.model';
import { KeyValue } from '@angular/common';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-historical-events',
  templateUrl: './historical-events.page.html',
  styleUrls: ['./historical-events.page.scss'],
})
export class HistoricalEventsPage implements OnInit {
  groupedEvents$: Observable<GroupedEvents>;

  keyDescOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }
  constructor(
    private router: Router,
    private historyService: HistoryService,
     ) { }

  ngOnInit() {
    this.groupedEvents$ = this.historyService.getGroupedEvents();
  }

  openDetailsWithState(event,history) {
    let navigationExtras: NavigationExtras = {
      state: {
        launch: event,
        test:history
      }
    };
    
    this.router.navigate(["past-detail"], navigationExtras);
  }

}
