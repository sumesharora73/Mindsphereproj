import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinethreeComponent } from './machinethree.component';

describe('MachinethreeComponent', () => {
  let component: MachinethreeComponent;
  let fixture: ComponentFixture<MachinethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
