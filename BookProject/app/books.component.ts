import { Component , OnInit} from '@angular/core';
import { BooksService } from './services/books.service';
import {Book} from './services/books';
@Component({
  selector: 'books-list',
  templateUrl: 'assets/books.component.html',
  providers: [BooksService] // call services :) 
})
export class BooksComponent  implements OnInit {

   books: Book[]; //set book array
  constructor(private booksService: BooksService) {  } //book constructor

  getBooks(): void{
   this.books = this.booksService.getBooks(); // get all books  and set to books array
  }
  ngOnInit(): void {
    this.getBooks();
  }

}
