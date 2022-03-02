
import { keepService } from '../services/keep-service.js'



export default {
    template: `
        <section class="keep-note-create">
            <h3>note creator</h3>
            <p>{{noteType}}</p>
            <input type="text" placeholder="note text" v-model="newNoteTxt">
            <input type="text" placeholder="note title" v-model="noteTitle">
            <button @click="setNoteType('note-txt')">txt</button>
            <button @click="setNoteType('note-img')">img</button>
            <button @click="setNoteType('note-list')">list</button>
            <button @click="setNoteType('note-video')">video</button>
            <button @click="addNewNote">Submit</button>
        </section>
    `,
    data() {
        return {
            newNoteTxt: '',
            noteType: 'note-txt',
            noteTitle: '',
        }
    },
    methods: {
        addNewNote() {
            const newNote = keepService.getEmptyNote(this.noteType);
            newNote.info.txt = this.newNoteTxt;
            
            keepService.save(newNote).then((note) => {
                this.$emit('noteAdded', note);
                this.newNoteTxt = '';
            });
        },
        setNoteType(type) {
            this.noteType = type;
        }
    }
}