import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadhuriPatelComponent } from './madhuri-patel.component';

describe('MadhuriPatelComponent', () => {
  let component: MadhuriPatelComponent;
  let fixture: ComponentFixture<MadhuriPatelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadhuriPatelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadhuriPatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
