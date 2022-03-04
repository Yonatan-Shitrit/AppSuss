export default {
    props: ['note'],
    template: `
        <section class="keep-note-delete-screen" >
            <div>
                <h4>Are You Sure?</h4>
                <p>It will be gone forever!</p>
                <button @click="deleteNote">Delete!</button>
                <button @click="closeScreen">Stop Go back!</button>
            </div>
        </section>
    `, methods: {
        deleteNote() {
            this.$emit('deleteConfirm');
        },
        closeScreen() {
            this.$emit('closeDeleteScreen');
        }
    }

}