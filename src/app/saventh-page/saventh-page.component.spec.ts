import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaventhPageComponent } from './saventh-page.component';

describe('SaventhPageComponent', () => {
  let component: SaventhPageComponent;
  let fixture: ComponentFixture<SaventhPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaventhPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaventhPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
