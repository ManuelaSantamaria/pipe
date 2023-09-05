import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecolorComponent } from './pipecolor.component';

describe('PipecolorComponent', () => {
  let component: PipecolorComponent;
  let fixture: ComponentFixture<PipecolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipecolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
