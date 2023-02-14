class PrintEditionItem {
    #state = 100;
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
    }

    fix(){
        this.state *= 1.5;
    }

    set state (newState) {
        if (newState > 100) {
            this.#state = 100;
        } else if (newState < 0) {
            this.#state = 0;
        } else {
            this.#state = newState;
        }
    }

    get state () {
        return this.#state;
    }

}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super (name,releaseDate,pagesCount);
        this.type = 'magazine';
    }
    }

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        book.state > 30 ? this.books.push(book) : console.log("книга в плохом состоянии");
    }

    findBookBy(type, value) {
        let result = this.books.find(item => item[type] === value);
        if (result === undefined) {
            return null;
        } else {
            return result;
        }

    }

    giveBookByName(bookName) {
        let result = this.books.findIndex(item => item.name === bookName);
        if (result === -1) {
            return null;
        } else {
            return this.books.splice(result,1);

        } 
    }
}