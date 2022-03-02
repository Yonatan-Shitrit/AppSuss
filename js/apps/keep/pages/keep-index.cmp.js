import { keepService } from '../services/keep-service.js';
import keepNoteCreator from '../cmps/keep-note-creator.cmp.js';
import keepNoteList from '../cmps/keep-note-list.cmp.js';



export default {
    template: `
        <section class="keep-index">
            <h3>Keep Index</h3>
            <keep-note-creator @noteAdded="addNote"/>
            <keep-note-list :notes="notes" @delete="deleteNote" @edit="editNote" />
            <!-- <p>storage: {{notes}}</p> -->
        </section>
    `,
    data() {
        return {
            notes: '',
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes);
    },
    components: {
        keepNoteCreator,
        keepNoteList,
    },
    methods: {
        addNote(note) {
            this.notes.push(note);
        },
        deleteNote(noteId) {
            keepService.remove(noteId)
                .then(notes => {
                    this.notes = notes;
                    keepService.query()
                        .then(notes => this.notes = notes);
                });
        },
        editNote(noteId) {
            
        }
    },

}