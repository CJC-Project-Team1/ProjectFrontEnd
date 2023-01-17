import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeHomeComponent } from './oe-home.component';

describe('OeHomeComponent', () => {
  let component: OeHomeComponent;
  let fixture: ComponentFixture<OeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
