import { Injectable } from '@angular/core';
import { Book } from './books';
import { BOOKS } from './mock-books';

@Injectable()
export class BooksService {
   constructor() {

    }

    getBooks(): Book[]{
       return BOOKS;
    }


}
