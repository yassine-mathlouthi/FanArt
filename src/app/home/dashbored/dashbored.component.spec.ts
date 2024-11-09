import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredComponent } from './dashbored.component';

describe('DashboredComponent', () => {
  let component: DashboredComponent;
  let fixture: ComponentFixture<DashboredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboredComponent]
    });
    fixture = TestBed.createComponent(DashboredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
