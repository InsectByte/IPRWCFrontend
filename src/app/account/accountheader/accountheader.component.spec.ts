import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountheaderComponent } from './accountheader.component';

describe('AccountheaderComponent', () => {
  let component: AccountheaderComponent;
  let fixture: ComponentFixture<AccountheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
