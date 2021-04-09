import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedLiveComponent } from './suggested-live.component';

describe('SuggestedLiveComponent', () => {
  let component: SuggestedLiveComponent;
  let fixture: ComponentFixture<SuggestedLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
