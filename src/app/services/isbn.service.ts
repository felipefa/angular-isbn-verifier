import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IsbnService {
  generate(): string {
    try {
      const digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
      const sum = digits.reduce((accumulator, current, index) => accumulator + current * (10 - index), 0);
      const checkDigit = (11 - (sum % 11)) % 11;
      const isbn = [...digits, checkDigit === 10 ? 'X' : checkDigit].join('');

      return isbn;
    } catch (error) {
      console.error(error);
      return '3-598-21507-X';
    }
  }

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
      console.error(error);
      return false;
    }
  }
}

