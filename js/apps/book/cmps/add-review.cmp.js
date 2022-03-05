export default {
    template: `
        <section class="book-review">
            <span>Name: </span>
            <input type="text" placeholder="Your Name" v-model="review.name">
            <span>Rating: 
            <select v-model="review.rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </span>
            <span>Read At: </span>
            <input type="date" v-model="review.time" >
            <span>Comment: </span>
            <textarea v-model="review.comment" cols="40" rows="7" placeholder="Comment"></textarea>
            <button @click="submit">Submit</button>
        </section>
    
    `,
    data() {
        return {
            review: {
                rating: '1',
                name: 'Book Reader',
                time: this.dateFormat(),
                comment: '',
            }

        }
    },
    methods: {
        dateFormat(){
            var now = new Date();
            const year = now.getFullYear();
            const month = (now.getMonth()+1+'').padStart(2,'0');
            const day = (''+now.getDate()).padStart(2,'0');
            return year+'-'+month+'-'+day;
        },
        submit(){
            this.$emit('submit',this.review)
        }

    },
    computed: {
    }
    
}