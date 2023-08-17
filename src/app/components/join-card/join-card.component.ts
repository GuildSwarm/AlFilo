import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-join-card',
  templateUrl: './join-card.component.html',
  styleUrls: ['./join-card.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({
        opacity: 1,transform: 'translateY(0px)'

      })),
      state('hidden', style({
        opacity: 0, transform: 'translateY(50px)'
      })),
      transition('hidden => visible', animate('1000ms ease-in-out')),
    ]),
  ],
})
export class JoinCardComponent {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }


}