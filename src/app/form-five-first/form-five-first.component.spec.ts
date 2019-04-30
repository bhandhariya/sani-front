import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiveFirstComponent } from './form-five-first.component';

describe('FormFiveFirstComponent', () => {
  let component: FormFiveFirstComponent;
  let fixture: ComponentFixture<FormFiveFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiveFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiveFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
