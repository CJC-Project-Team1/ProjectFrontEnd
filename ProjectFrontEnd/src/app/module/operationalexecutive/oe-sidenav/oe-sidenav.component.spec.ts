import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeSidenavComponent } from './oe-sidenav.component';

describe('OeSidenavComponent', () => {
  let component: OeSidenavComponent;
  let fixture: ComponentFixture<OeSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
