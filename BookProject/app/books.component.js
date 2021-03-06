"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var books_service_1 = require('./services/books.service');
var BooksComponent = (function () {
    function BooksComponent(booksService) {
        this.booksService = booksService;
    } //book constructor
    BooksComponent.prototype.getBooks = function () {
        this.books = this.booksService.getBooks(); // get all books  and set to books array
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books-list',
            templateUrl: 'assets/books.component.html',
            providers: [books_service_1.BooksService] // call services :) 
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map