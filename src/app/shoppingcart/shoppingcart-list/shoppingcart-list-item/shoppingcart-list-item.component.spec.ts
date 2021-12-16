import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartListItemComponent } from './shoppingcart-list-item.component';

describe('ShoppingcartListItemComponent', () => {
  let component: ShoppingcartListItemComponent;
  let fixture: ComponentFixture<ShoppingcartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcartListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
