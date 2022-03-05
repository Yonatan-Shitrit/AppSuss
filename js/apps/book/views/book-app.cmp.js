import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';


export default {
    template: `
        <section class="main-layout">
            <book-filter @filtered="setFilter"/>
            <book-list :books="booksToShow" @selected="bookSelected" />
        </section>
    `,
    components: {
        bookList,
        bookFilter
    },
    data() {
        return {
            books: null,
            filterBy: null,
            selectedBook: null,
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books);
    },
    methods: {
        bookSelected(book) {
            this.selectedBook = book;
        },
        setFilter(filter) {
            this.filterBy = filter;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            console.log('i filter by ',this.filterBy );
            // const  {minPrice, maxPrice, title} = this.filterBy
            const regex = new RegExp(this.filterBy.title, 'i');
            return this.books.filter(book => regex.test(book.title) && book.listPrice.amount > this.filterBy.minPrice && book.listPrice.amount < this.filterBy.maxPrice);
        }

    }
}