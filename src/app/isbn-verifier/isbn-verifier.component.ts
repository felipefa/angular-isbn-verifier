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
  isbnService: IsbnService;
  isIsbnValid = false;

  constructor() {
    this.isbnService = new IsbnService();
  }

  onChangeIsbnInput(event: any) {
    this.isbnInput = event.target.value;
    this.hasIsbnBeenValidated = false;
  }

  validateIsbn() {
    this.isIsbnValid = this.isbnService.isValid(this.isbnInput);
    this.hasIsbnBeenValidated = true;
  }
}
