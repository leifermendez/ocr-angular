import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFileComponent } from './home-file.component';

describe('HomeFileComponent', () => {
  let component: HomeFileComponent;
  let fixture: ComponentFixture<HomeFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
