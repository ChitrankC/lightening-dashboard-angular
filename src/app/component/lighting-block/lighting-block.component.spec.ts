import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingBlockComponent } from './lighting-block.component';

describe('LightingBlockComponent', () => {
  let component: LightingBlockComponent;
  let fixture: ComponentFixture<LightingBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightingBlockComponent]
    });
    fixture = TestBed.createComponent(LightingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
