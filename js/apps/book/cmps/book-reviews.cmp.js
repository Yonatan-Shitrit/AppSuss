export default {
    props: ['reviews'],
    template: `
        <section class="book-reviews">
            <ul>
                <li  v-for="review in reviews" class="review">
                    <p>{{review.name}}</p>
                    <p>Rating: {{review.rating}}</p>
                    <p>{{review.time}}</p>
                    <p>{{review.comment}}</p>
                    <button @click="deleteR(review.id)">delete</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        deleteR(reviewId) {
            console.log('deleting:', reviewId);
            this.$emit('deleted', reviewId);
        }
    }
}