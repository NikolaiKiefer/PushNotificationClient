import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NewsletterService} from '../services/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PushNotificationTest';
  readonly VAPID_PUBLIC_KEY = 'BP6ztFRgF2D3v4-LEJv-kZ3azO3llpCuUokMCMQ9mA0eqfakLptwaY62aFB_xpowaSuJ6EKG8Mdo68zvZEEhT2M';

  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) {}

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
