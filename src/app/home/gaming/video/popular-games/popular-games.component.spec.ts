import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGamesComponent } from './popular-games.component';

describe('PopularGamesComponent', () => {
  let component: PopularGamesComponent;
  let fixture: ComponentFixture<PopularGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularGamesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
