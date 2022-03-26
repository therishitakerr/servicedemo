import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecompComponent } from './datecomp.component';

describe('DatecompComponent', () => {
  let component: DatecompComponent;
  let fixture: ComponentFixture<DatecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
