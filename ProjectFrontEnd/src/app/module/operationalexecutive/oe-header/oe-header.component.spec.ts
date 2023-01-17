import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeHeaderComponent } from './oe-header.component';

describe('OeHeaderComponent', () => {
  let component: OeHeaderComponent;
  let fixture: ComponentFixture<OeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
