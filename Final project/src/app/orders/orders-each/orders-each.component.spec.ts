import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersEachComponent } from './orders-each.component';

describe('OrdersEachComponent', () => {
  let component: OrdersEachComponent;
  let fixture: ComponentFixture<OrdersEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
