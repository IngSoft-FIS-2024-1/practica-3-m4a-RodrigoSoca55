import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });
  it('throw an error when setting an empty name', () => {
    // TODO
  });
  it('retorno la cantidad de palabras  de los libros de la   biblioteca',()=>{
    
    myLibrary.addBook('Cuentos de la selca ', 'Horacio Quiroga', 10);
    myLibrary.addBook('Cuentos de la selnam ', 'Horacio Quiroga', 10);
    myLibrary.addBook('Cuentos de la asd', 'Horacio Quiroga', 10);
    
    const myBook  = myLibrary.getInventory()[0];
    const myBook2  = myLibrary.getInventory()[1];
    const myBook3  = myLibrary.getInventory()[2];

    myBook.setWords(100);
    myBook2.setWords(200);

    myBook3.setWords(500);


    const words =  myBook.getWords() + myBook2.getWords() + myBook3.getWords();
    expect( myLibrary.totalWords()).toBe(words);
  });

});