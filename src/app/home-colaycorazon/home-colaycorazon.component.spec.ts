import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeColaycorazonComponent } from './home-colaycorazon.component';

describe('HomeColaycorazonComponent', () => {
  let component: HomeColaycorazonComponent;
  let fixture: ComponentFixture<HomeColaycorazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeColaycorazonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeColaycorazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
