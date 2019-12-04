import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineoneComponent } from './machineone.component';

describe('MachineoneComponent', () => {
  let component: MachineoneComponent;
  let fixture: ComponentFixture<MachineoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
