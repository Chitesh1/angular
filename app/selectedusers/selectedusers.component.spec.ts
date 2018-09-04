import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedusersComponent } from './selectedusers.component';

describe('SelectedusersComponent', () => {
  let component: SelectedusersComponent;
  let fixture: ComponentFixture<SelectedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
