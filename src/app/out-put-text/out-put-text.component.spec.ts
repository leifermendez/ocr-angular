import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPutTextComponent } from './out-put-text.component';

describe('OutPutTextComponent', () => {
  let component: OutPutTextComponent;
  let fixture: ComponentFixture<OutPutTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutPutTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPutTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
