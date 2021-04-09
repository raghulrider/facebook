import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingmenuComponent } from './gamingmenu.component';

describe('GamingmenuComponent', () => {
  let component: GamingmenuComponent;
  let fixture: ComponentFixture<GamingmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
