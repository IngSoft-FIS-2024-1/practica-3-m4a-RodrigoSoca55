import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    // TODO
  });

  it('check page param is a number', () => {
    // TODO
  });

  it('check pages not < 1', () => {
    // TODO
  });
  it('toString()', () => {
    // TODO
  });

  it('retorno del promedio de paginas por libro',()=>{
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(3500);
    const prom =  3500/350;
    expect( myBook.wordsPerPage()).toBe(prom);
  });
  it('retorno del promedio de paginas por libro',()=>{
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 1);
    myBook.setWords(1);
    const prom =  1/1;
    expect( myBook.wordsPerPage()).toBe(prom);
  });
  it('retorno del promedio de paginas por libro',()=>{
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 10);
    myBook.setWords(2);
    const prom =  2/10;
    expect( myBook.wordsPerPage()).toBe(prom);
  });
   

});
