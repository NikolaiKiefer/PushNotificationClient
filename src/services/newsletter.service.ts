import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub: PushSubscription) {
    console.log(sub);
    let tmp = {id: 'dada',
        subscription: sub};
    return this.http.post('http://localhost:3000/subscribe', tmp);
  }
}
