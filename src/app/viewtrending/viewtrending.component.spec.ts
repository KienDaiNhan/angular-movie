import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrendingComponent } from './viewtrending.component';

describe('ViewtrendingComponent', () => {
  let component: ViewtrendingComponent;
  let fixture: ComponentFixture<ViewtrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtrendingComponent]
    });
    fixture = TestBed.createComponent(ViewtrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
