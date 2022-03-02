import keepNotePreview from './keep-note-preview.cmp.js';



export default {
    props: ['notes'],
    template: `
        <section class="keep-note-list">
            <ul>
                <li v-for="note in notes" :key="note.id" class="note-preview-container">
                    <keep-note-preview :note="note" @listUpdate="updateList"/>
                    <button @click="noteManipulation('delete',note.id)">Delete</button>
                    <button @click="noteManipulation('edit',note.id)">edit</button>
                </li>
            </ul>
        </section>
    `,
    components: {
        keepNotePreview,
    },
    methods: {
        noteManipulation(type, noteId) {
            this.$emit(type, noteId);
        },
        updateList(note){
            this.$emit('listUpdate',note);
        }
    },

}