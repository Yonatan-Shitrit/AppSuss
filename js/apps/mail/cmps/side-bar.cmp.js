export default {
    template: `
                <div class="side-bar">
                <button @click = "compose" >compose</button>
                </div>

    `,
    data() {
        return {
            selectedId: null
        }
    },
    methods: {
        compose() {
            this.$emit('compose')
        }


    },
    computed: {

    },

}