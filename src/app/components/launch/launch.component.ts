import { Component, OnInit, Input } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.4s', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class LaunchComponent implements OnInit {
  @Input() launches: Launch[];
  constructor() { }

  ngOnInit() {}

}
