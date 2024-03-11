/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogImprintComponent } from './dialog-imprint.component';

describe('DialogImprintComponent', () => {
  let component: DialogImprintComponent;
  let fixture: ComponentFixture<DialogImprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogImprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
