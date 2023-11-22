import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbnVerifierComponent } from './isbn-verifier.component';

describe('IsbnVerifierComponent', () => {
  let component: IsbnVerifierComponent;
  let fixture: ComponentFixture<IsbnVerifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsbnVerifierComponent]
    });
    fixture = TestBed.createComponent(IsbnVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
