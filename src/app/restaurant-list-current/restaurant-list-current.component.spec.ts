import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListCurrentComponent } from './restaurant-list-current.component';

describe('RestaurantListCurrentComponent', () => {
  let component: RestaurantListCurrentComponent;
  let fixture: ComponentFixture<RestaurantListCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantListCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
