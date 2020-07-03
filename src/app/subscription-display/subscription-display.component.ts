import { Component, OnInit } from '@angular/core';
import {SwPush} from '@angular/service-worker';

@Component({
  selector: 'app-subscription-display',
  templateUrl: './subscription-display.component.html',
  styleUrls: ['./subscription-display.component.css']
})
export class SubscriptionDisplayComponent implements OnInit {
sub: PushSubscription;
  constructor(private swPush: SwPush ) { }

  ngOnInit(): void {
    this.swPush.subscription.subscribe(change => {
      this.sub = change;
    });
  }

}
