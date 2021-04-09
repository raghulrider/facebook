import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClipsComponent } from './top-clips.component';

describe('TopClipsComponent', () => {
  let component: TopClipsComponent;
  let fixture: ComponentFixture<TopClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopClipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
