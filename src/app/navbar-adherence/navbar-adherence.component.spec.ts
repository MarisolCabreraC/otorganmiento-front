import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdherenceComponent } from './navbar-adherence.component';

describe('NavbarAdherenceComponent', () => {
  let component: NavbarAdherenceComponent;
  let fixture: ComponentFixture<NavbarAdherenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAdherenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdherenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
