import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockManagementComponent } from './block-management.component';

describe('BlockManagementComponent', () => {
  let component: BlockManagementComponent;
  let fixture: ComponentFixture<BlockManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockManagementComponent]
    });
    fixture = TestBed.createComponent(BlockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
