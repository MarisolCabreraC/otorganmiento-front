import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdherenciaComponent } from './edit-adherencia.component';

describe('EditAdherenciaComponent', () => {
  let component: EditAdherenciaComponent;
  let fixture: ComponentFixture<EditAdherenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdherenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdherenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
