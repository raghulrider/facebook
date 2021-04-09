import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedTournamentComponent } from './suggested-tournament.component';

describe('SuggestedTournamentComponent', () => {
  let component: SuggestedTournamentComponent;
  let fixture: ComponentFixture<SuggestedTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
