import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuanbinhComponent } from './xuanbinh.component';

describe('XuanbinhComponent', () => {
  let component: XuanbinhComponent;
  let fixture: ComponentFixture<XuanbinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuanbinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuanbinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
