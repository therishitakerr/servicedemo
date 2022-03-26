import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraycompComponent } from './arraycomp.component';

describe('ArraycompComponent', () => {
  let component: ArraycompComponent;
  let fixture: ComponentFixture<ArraycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraycompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
