import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewandrisingGamesComponent } from './newandrising-games.component';

describe('NewandrisingGamesComponent', () => {
  let component: NewandrisingGamesComponent;
  let fixture: ComponentFixture<NewandrisingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewandrisingGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewandrisingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
