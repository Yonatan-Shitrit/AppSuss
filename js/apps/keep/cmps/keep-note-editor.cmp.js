




export default {
    props: ['note'],
    template: `
        <section class="keep-note-editor" >
            <input v-model="noteTitle" type="text">
            <textarea v-model="noteInput" name="" id="" cols="30" rows="10"></textarea>
            <button @click="updateNote">Submit</button>
        </section>
    `,
    data() {
        return {
            noteInput: '',
            noteTitle: ''
        }
    },
    created() {
        if (this.note.type === 'noteList') {
            this.noteInput = this.note.info.todos.map(todo => todo.txt).join(',');
        } else if (this.note.type === 'noteImg' || this.note.type === 'noteVideo') {
            this.noteInput = this.note.info.url;
        } else this.noteInput = this.note.info.txt;
        this.noteTitle = this.note.info.title;
    },
    methods: {
        updateNote() {
            const noteInput = this.noteInput;
            const noteTitle = this.noteTitle;
            const noteType = this.note.type;
            this.$emit('noteEdited', { noteType, noteInput, noteTitle });
        }
    },
}