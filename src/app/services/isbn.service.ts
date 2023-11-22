import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IsbnService {

  isValid(isbn: string): boolean {
    try {
      isbn = isbn.replace(/-/g, '');

      if (isbn.length !== 10) return false;

      let sum = 0;

      for (let i = 0; i < 10; i++) {
        let num = i === 9 && isbn[i] === 'X' ? 10 : parseInt(isbn[i]);

        if (isNaN(num)) return false;

        sum += num * (10 - i);
      }

      return sum % 11 === 0;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

