import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtheatreComponent } from './viewtheatre.component';

describe('ViewtheatreComponent', () => {
  let component: ViewtheatreComponent;
  let fixture: ComponentFixture<ViewtheatreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtheatreComponent]
    });
    fixture = TestBed.createComponent(ViewtheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
