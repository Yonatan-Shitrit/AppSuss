import bookPreview from "./book-preview.cmp.js"


export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" :key="book.id" class="book-preview-container" @click="bookSelected(book.id)" >
                   <book-preview :book="book" />
                </li>
            </ul>
        </section>
    `,
    components: {
        bookPreview
    },
    data() {
        return {

        }
    },
    methods: {
        bookSelected(bookId){
            this.$router.push(`/book/${bookId}`)
        }

    },
    computed: {

    }
}