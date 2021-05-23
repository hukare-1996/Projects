import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceheaderComponent } from './serviceheader.component';

describe('ServiceheaderComponent', () => {
  let component: ServiceheaderComponent;
  let fixture: ComponentFixture<ServiceheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
