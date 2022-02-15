import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdherenceComponent } from './add-adherence.component';

describe('AddAdherenceComponent', () => {
  let component: AddAdherenceComponent;
  let fixture: ComponentFixture<AddAdherenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdherenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdherenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
