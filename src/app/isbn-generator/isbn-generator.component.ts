import { Component } from '@angular/core';
import { IsbnService } from '../services/isbn.service';

@Component({
  selector: 'app-isbn-generator',
  templateUrl: './isbn-generator.component.html',
  styleUrls: ['./isbn-generator.component.css']
})
export class IsbnGeneratorComponent {
  isbnService: IsbnService;
  isbnGenerated = '';

  constructor() {
    this.isbnService = new IsbnService();
  }

  generateIsbn(): void {
    this.isbnGenerated = this.isbnService.generate();
  }
}
