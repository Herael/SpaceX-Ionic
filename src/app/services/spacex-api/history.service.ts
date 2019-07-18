import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event, GroupedEvents } from 'src/app/models/event.model';

@Injectable({
  providedIn: "root"
})
export class HistoryService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = "https://api.spacexdata.com/v3";
  }

getGroupedEvents(): Observable<GroupedEvents> {
    const requestEndpoint = `${this.apiBaseUrl}/history?order=desc`;
    return this.http.get<Event[]>(requestEndpoint).pipe(
      map((events: Event[]) => {
        const groupedEventsByYear = events.reduce((groupedEvents: GroupedEvents, event: Event) => {
          const date = new Date(event.event_date_utc).getFullYear();
          if (!groupedEvents[date]) {
            groupedEvents[date] = [];
          }
          groupedEvents[date].push(event);
          return groupedEvents;
        }, new GroupedEvents());


        return groupedEventsByYear;
      })
    );
  }
}