import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginComponentComponent } from './userlogin-component.component';

describe('UserloginComponentComponent', () => {
  let component: UserloginComponentComponent;
  let fixture: ComponentFixture<UserloginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
