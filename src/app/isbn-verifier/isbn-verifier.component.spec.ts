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

  it('should validate the ISBN', () => {
    component.isbnInput = '3-598-21507-X';
    component.validateIsbn();
    expect(component.isIsbnValid).toBe(true);
    expect(component.validationResult).toBe(`${component.isbnInput} is ${component.isIsbnValid ? 'a valid' : 'an invalid'} ISBN number`);
  });

  it('should show an error message for invalid ISBN', () => {
    component.isbnInput = '1234567890';
    component.validateIsbn();
    expect(component.isIsbnValid).toBe(false);
    expect(component.validationResult).toBe(`${component.isbnInput} is ${component.isIsbnValid ? 'a valid' : 'an invalid'} ISBN number`);
  });
});
