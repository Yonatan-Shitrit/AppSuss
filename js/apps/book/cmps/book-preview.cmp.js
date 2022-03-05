export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <h3>{{book.title}}</h3>
            <img :src="book.thumbnail">
            <p>{{book.subtitle}}</p>
            <span>{{currency}}</span>
        </section>
    `,
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        currency() {
            return new Intl.NumberFormat('il-IL',
                { style: 'currency', currency: this.book.listPrice.currencyCode })
                .format(this.book.listPrice.amount)
        }
    }
}