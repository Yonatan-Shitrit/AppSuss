import { keepService } from '../services/keep-service.js'




export default {
    props: ['note'],
    template: `
            <div class="editor-screen" @click="closeEditor"></div>
        <section :style="note.style" class="keep-note-editor" >
            <input v-model="noteTitle" type="text">
            <textarea v-model="noteInput" spellcheck="false"></textarea>
            <button @click="updateNote">Submit</button>
        </section>
    `,
    data() {
        return {
            noteInput: '',
            noteTitle: '',
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
            var editedNote = this.note;
            editedNote.info.title = this.noteTitle;
            if (this.note.type === 'noteTxt') editedNote.info.txt = this.noteInput;
            else if (this.note.type === 'noteImg' || this.note.type === 'noteVideo') editedNote.info.url = this.noteInput;
            else if (this.note.type === 'noteList') editedNote.info.todos = this.noteInput.split(',').map(todo => { return { txt: todo, done: false } });
            keepService.save(editedNote).then(() => {
                this.$emit('noteEdited');
            });
        },
        closeEditor(){
            this.$emit('closeEditor')
        }
    },
}