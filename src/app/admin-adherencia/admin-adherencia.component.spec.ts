import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdherenciaComponent } from './admin-adherencia.component';

describe('AdminAdherenciaComponent', () => {
  let component: AdminAdherenciaComponent;
  let fixture: ComponentFixture<AdminAdherenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdherenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdherenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
