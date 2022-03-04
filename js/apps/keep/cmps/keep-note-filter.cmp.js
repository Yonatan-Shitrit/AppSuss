export default {
    template: `
        <section class="note-filter">
            <input type="text" placeholder="filter..." v-model="filterBy.text">
            <button @click="setFilter">
                <img src="../../../img/keep/icons/search.png" alt="search">
            </button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                type: ''
            }
        }
    },
    methods: {
        setFilter() {
            // if (!this.filterBy.maxPrice) this.filterBy.maxPrice = Infinity;
            console.log('i send filter',this.filterBy);
            this.$emit('filtered', { ...this.filterBy });
        }
    }
}