import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHeaderComponent } from './re-header.component';

describe('ReHeaderComponent', () => {
  let component: ReHeaderComponent;
  let fixture: ComponentFixture<ReHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
