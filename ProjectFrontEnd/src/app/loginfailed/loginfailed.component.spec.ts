import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfailedComponent } from './loginfailed.component';

describe('LoginfailedComponent', () => {
  let component: LoginfailedComponent;
  let fixture: ComponentFixture<LoginfailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
