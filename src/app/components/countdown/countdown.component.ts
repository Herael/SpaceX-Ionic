import {Component, Input, OnInit} from '@angular/core';
import { Launch } from 'src/app/models/launch.model';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {

  @Input() timer: string;
  @Input() launch: Launch;

  constructor() {}

  ngOnInit() {
    this.initCountdown();
  }

  initCountdown() {

      // Update the count down every 1 second
      const x = setInterval(() => {

        if (typeof this.launch !== 'undefined') {

          // Set the date we're counting down to
          const d = new Date(this.launch.launch_date_unix * 1000);
          const countDownDate = d.getTime();

          // Get today's date and time
          const now = new Date().getTime();

          // Find the distance between now and the count down date
          const distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          this.timer = days + 'd ' + hours + 'h '
              + minutes + 'm ' + seconds + 's ';

          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            this.timer = 'EXPIRED';
          }
        }

      }, 1000);
  }
}
