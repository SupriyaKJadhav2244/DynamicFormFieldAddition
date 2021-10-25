import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaplayDataComponent } from './diaplay-data.component';

describe('DiaplayDataComponent', () => {
  let component: DiaplayDataComponent;
  let fixture: ComponentFixture<DiaplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaplayDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
