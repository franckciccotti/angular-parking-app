import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingsComponent } from './parkings.component';

describe('ParkingsComponent', () => {
  let component: ParkingsComponent;
  let fixture: ComponentFixture<ParkingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingsComponent]
    });
    fixture = TestBed.createComponent(ParkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
