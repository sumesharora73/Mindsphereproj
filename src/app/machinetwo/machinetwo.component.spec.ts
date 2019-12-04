import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinetwoComponent } from './machinetwo.component';

describe('MachinetwoComponent', () => {
  let component: MachinetwoComponent;
  let fixture: ComponentFixture<MachinetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
