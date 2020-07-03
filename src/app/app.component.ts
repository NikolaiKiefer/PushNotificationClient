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
  readonly VAPID_PUBLIC_KEY = 'BEbU8DBoKvvv7xUlioWcE-IS_EDNym4g6e3u2S97eX34G2WWOr6EZLFeS8bpokOWwcm-mEQlC10ey457l-9UDks';

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

  unsubscribeFromNotifications(){
    this.swPush.unsubscribe().then(console.log);
  }
}
