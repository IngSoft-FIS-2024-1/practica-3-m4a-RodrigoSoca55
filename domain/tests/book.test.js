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
    expect(() => myBook = new Book('horacio', 1, 350)).toThrow();
    });

  it('check page param is a number', () => {
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setPages('2');
    }).toThrow(Error);
  });
  it('check page param is a number', () => {
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setPages('jamon');
    }).toThrow(Error);
  });

  it('check pages not < 1', () => {
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setPages(-1);
    }).toThrow(Error);  });
  it('toString()', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(3500);
    expect( myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras:3500');
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

  it('retorno del autor si es anonimo de ',()=>{
    myBook = new Book('Cuentos de la Selva', '', 10);
    expect( myBook.getAuthor()).toBe('Anónimo');
  });
   

  it('retorno de setwords cuando no es un numero',()=>{
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setWords('hola');
    }).toThrow(Error);

  });
  
  it('retorno de setwords cuando no es un numero',()=>{
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setWords('1');
    }).toThrow(Error);

  });

  it('retorno de setwords cuando es menor a 1 el numero',()=>{
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setWords(0);
    }).toThrow(Error);

  });
  
  it('retorno de setwords cuando es menor a 1 el numero',()=>{
    const myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 3500);
    expect(() => {
      myBook.setWords(-1);
    }).toThrow(Error);

  });

});
