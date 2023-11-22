import { Component } from '@angular/core';
import { IsbnService } from '../services/isbn.service';

@Component({
  selector: 'app-isbn-verifier',
  templateUrl: './isbn-verifier.component.html',
  styleUrls: ['./isbn-verifier.component.css']
})
export class IsbnVerifierComponent {
  hasIsbnBeenValidated = false;
  isbnInput = '';
  isbnInputError = '';
  isbnService: IsbnService;
  isIsbnValid = false;
  validationResult = '';

  constructor() {
    this.isbnService = new IsbnService();
  }

  onChangeIsbnInput(event: any) {
    const newValue = event.target.value;

    this.isbnInput = newValue;

    if (newValue.length === 0) {
      this.isbnInputError = 'Please enter an ISBN';
    } else {
      const hasNumberOrX = /^[0-9\-xX]+$/.test(newValue);

      if (!hasNumberOrX) {
        this.isbnInputError = 'ISBN must contain only digits or X';
      } else {
        this.isbnInputError = '';
      }
    }

    this.hasIsbnBeenValidated = false;
  }

  validateIsbn() {
    this.isIsbnValid = this.isbnService.isValid(this.isbnInput);

    this.validationResult = `${this.isbnInput} is ${this.isIsbnValid ? 'a valid' : 'an invalid'} ISBN number`;
    this.hasIsbnBeenValidated = true;
  }
}
