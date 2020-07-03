import { Component, OnInit } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NewsletterService} from '../../services/newsletter.service';

@Component({
  selector: 'app-subscription-display',
  templateUrl: './subscription-display.component.html',
  styleUrls: ['./subscription-display.component.css']
})
export class SubscriptionDisplayComponent implements OnInit {
sub: PushSubscription;
  constructor(private swPush: SwPush, private newsletterService: NewsletterService) { }

  ngOnInit(): void {
    this.swPush.subscription.subscribe(change => {
      this.sub = change;
    });
  }

  sendPushrequest() {
    this.newsletterService.sendPushRequest();
  }

}
