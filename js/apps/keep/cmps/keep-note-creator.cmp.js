
import { keepService } from '../services/keep-service.js'



export default {
    template: `
        <section class="keep-note-create">
            <div>
            <input type="text" :placeholder=inputPlaceholder v-model="newNoteInput">
            <input type="text" placeholder="Note Title" v-model="noteTitle">
            <button @click="setNoteType('noteTxt')">
                <img src="../../../img/keep/icons/font.png" alt="">
            </button>
            <button @click="setNoteType('noteImg')">
                <img src="../../../img/keep/icons/image.png" alt="">
            </button>
            <button @click="setNoteType('noteList')">
                <img src="../../../img/keep/icons/list.png" alt="">
            </button>
            <button @click="setNoteType('noteVideo')">
                <img src="../../../img/keep/icons/video.png" alt="">
            </button>
            <button @click="addNewNote">
                <img src="../../../img/keep/icons/add.png" alt="">
            </button>
            </div>
        </section>
    `,
    data() {
        return {
            newNoteInput: '',
            noteType: 'noteTxt',
            noteTitle: '',
        }
    },
    methods: {
        addNewNote() {
            const newNote = keepService.getEmptyNote(this.noteType);
            newNote.info.title = this.noteTitle;
            if (this.noteType === 'noteTxt') newNote.info.txt = this.newNoteInput;
            else if (this.noteType === 'noteImg' || this.noteType === 'noteVideo') newNote.info.url = this.newNoteInput;
            else if (this.noteType === 'noteList') newNote.info.todos = this.newNoteInput.split(',').map(todo=> {return {txt: todo, done: false}});
            keepService.save(newNote).then((note) => {
                this.$emit('noteAdded', note);
                this.newNoteInput = '';
                this.noteTitle = '';
            });
        },
        setNoteType(type) {
            this.noteType = type;
        }
    },
    computed: {
        inputPlaceholder() {
            if (this.noteType === 'noteTxt') return 'Note Text';
            else if (this.noteType === 'noteImg') return 'Enter Image URL';
            else if (this.noteType === 'noteList') return `Enter list devided by ',' `;
            else if (this.noteType === 'noteVideo') return 'Enter Video URL';
        }
    }
}