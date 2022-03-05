import { bookService } from '../services/book-service.js';
import { utilService } from '../services/util-service.js';
import bookReviews from '../cmps/book-reviews.cmp.js';
import addReview from '../cmps/add-review.cmp.js';


export default {
    template: `
        <section v-if="book" class="book-details main-layout">
            <h2>{{book.title}}</h2>
            <p>{{readLength}}</p>
            <div class="thumbnail-container">
            <img :src="book.thumbnail">
            <img class="new" :src="newBook" alt="">
            <img class="sale" :src="sale" alt="">
            </div>
            <p>{{book.description}}</p>
            <span :class="priceColor">{{currency}}</span>
            <h3>Reviews:</h3>
            <button @click="addReview=!addReview">Add Review</button>
            <add-review v-if="addReview" @submit="submitReview"/>
            <book-reviews :reviews="book.reviews" @deleted="deleteReview" />
        </section>
    `,
    data() {
        return {
            book: null,
            addReview: false
        }
    },
    components: {
        bookReviews,
        addReview
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.get(id)
            .then(book => this.book = book);
    },
    methods: {
        submitReview(review) {
            review.id = utilService.makeId();
            var theBook;
            const id = this.$route.params.bookId;
            bookService.get(id)
                .then(book => {
                    theBook = book;
                    if (!theBook.reviews) theBook.reviews = [review];
                    else theBook.reviews.push(review);
                    bookService.save(theBook).then((newBook) => {
                        this.book = newBook;
                        this.addReview = false;
                    });
                });
        },
        deleteReview(reviewId) {
            const id = this.$route.params.bookId;
            bookService.get(id)
                .then(book => {
                    const theBook = book;
                    const reviewIdx = theBook.reviews.findIndex(review => review.id === reviewId);
                    theBook.reviews.splice(reviewIdx, 1);
                    bookService.save(theBook).then((newBook) => {
                        this.book = newBook;
                    });
                });
        }
    },
    computed: {
        readLength() {
            if (this.book.pageCount > 500) return 'Long Reading';
            else if (this.book.pageCount > 200) return 'Decent Reading';
            else if (this.book.pageCount < 100) return 'Light Reading';
        },
        currency() {
            return new Intl.NumberFormat('il-IL',
                { style: 'currency', currency: this.book.listPrice.currencyCode })
                .format(this.book.listPrice.amount)
        },
        priceColor() {
            // if (this.book.listPrice.amount < 20) return { green: true }
            if (this.book.listPrice.amount < 20) return 'green'
            else if (this.book.listPrice.amount > 150) return { red: true }
            else return false;
        },
        newBook() {
            if (new Date().getFullYear() - this.book.publishedDate < 1) return '../../../img/book/img/new.png'
        },
        sale() {
            if (this.book.listPrice.isOnSale) return '../../../img/book/img/sale.png';
        },


    }

}