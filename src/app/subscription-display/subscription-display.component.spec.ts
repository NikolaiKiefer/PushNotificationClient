import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDisplayComponent } from './subscription-display.component';

describe('SubscriptionDisplayComponent', () => {
  let component: SubscriptionDisplayComponent;
  let fixture: ComponentFixture<SubscriptionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
