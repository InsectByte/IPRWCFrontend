import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanslistItemComponent } from './planslist-item.component';

describe('PlanslistItemComponent', () => {
  let component: PlanslistItemComponent;
  let fixture: ComponentFixture<PlanslistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanslistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanslistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
