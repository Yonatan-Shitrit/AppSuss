export default {
    template: `
        <section class="book-filter">
            <span>Book Name:
            <input type="text" placeholder="Book Name" v-model="filterBy.title">
            </span>
            <span>Min Price:
            <input type="number" placeholder="Min Price" v-model="filterBy.minPrice">
            </span>
            <span>Max Price:
            <input type="number" placeholder="Max Price" v-model="filterBy.maxPrice">
            </span>
            <button @click="setFilter">Search</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                minPrice: 0,
                maxPrice: Infinity
            }
        }
    },
    methods: {
        setFilter() {
            if (!this.filterBy.maxPrice) this.filterBy.maxPrice = Infinity;
            this.$emit('filtered', { ...this.filterBy });
        }
    }
}