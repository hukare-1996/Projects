import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedealershowComponent } from './datedealershow.component';

describe('DatedealershowComponent', () => {
  let component: DatedealershowComponent;
  let fixture: ComponentFixture<DatedealershowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatedealershowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedealershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
