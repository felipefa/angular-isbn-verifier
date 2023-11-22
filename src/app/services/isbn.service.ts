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

  generateIsbn13FromIsbn10(isbn10: string): string {
    try {
      const isIsbn10Valid = this.isValid(isbn10);

      if (!isIsbn10Valid) throw new Error('Invalid ISBN10');

      let isbn13 = '978' + isbn10.replace(/-/g, '').slice(0, -1);

      let checkDigit = 0;

      for (let i = 0; i < isbn13.length; i++) {
        let digit = parseInt(isbn13.charAt(i));
        checkDigit += (i % 2 === 0) ? digit : digit * 3;
      }

      checkDigit = 10 - (checkDigit % 10);

      return isbn13 + checkDigit.toString();
    } catch (error) {
      console.error(error);
      return '978-3-598-21507-2';
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

