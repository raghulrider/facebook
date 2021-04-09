import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedGamesComponent } from './suggested-games.component';

describe('SuggestedGamesComponent', () => {
  let component: SuggestedGamesComponent;
  let fixture: ComponentFixture<SuggestedGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestedGamesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
