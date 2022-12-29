import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingDirectiveComponent } from './using-directive.component';

describe('UsingDirectiveComponent', () => {
  let component: UsingDirectiveComponent;
  let fixture: ComponentFixture<UsingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
