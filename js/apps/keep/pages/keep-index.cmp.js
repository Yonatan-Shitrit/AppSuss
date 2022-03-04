import { keepService } from '../services/keep-service.js';
import keepNoteCreator from '../cmps/keep-note-creator.cmp.js';
import keepNoteList from '../cmps/keep-note-list.cmp.js';
import keepNoteEditor from '../cmps/keep-note-editor.cmp.js';



export default {
    template: `
        <section class="keep-index">
            <h3>Keep Index</h3>
            <keep-note-creator @noteAdded="addNote"/>
            <keep-note-list :notes="notes" @delete="deleteNote" @pinned="togglePin" @edit="setEditor" @colorUpdate="updateColor" @listUpdate="updateList"/>
            <keep-note-editor v-if="noteEditor" @noteEdited="editNote" @closeEditor="editorClose" :note="noteEditor"/>
        </section>
    `,
    data() {
        return {
            notes: '',
            noteEditor: false,
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes);
    },
    components: {
        keepNoteCreator,
        keepNoteList,
        keepNoteEditor,
    },
    methods: {
        addNote(note) {
            this.notes.push(note);
        },
        deleteNote(noteId) {
            keepService.remove(noteId)
                .then(() => {
                    keepService.query()
                        .then(notes => this.notes = notes);
                });
        },
        setEditor(noteId) {
            keepService.get(noteId)
                .then(note => this.noteEditor = note)
        },
        updateNote(note) {
            keepService.save(note)
                .then(() => keepService.query()
                    .then(notes => this.notes = notes));
        },
        updateColor({ color, noteId }) {
            keepService.get(noteId)
                .then(note => {
                    note.style.backgroundColor = color;
                    this.updateNote(note);
                });
        },
        updateList(noteUpdate) {
            keepService.get(noteUpdate.id)
                .then(note => {
                    note.info.todos = noteUpdate.info.todos;
                    this.updateNote(note);
                });
        },
        editNote() {
            this.noteEditor = false;
            keepService.query()
                .then(notes => this.notes = notes);
        },
        togglePin(noteId) {
            keepService.get(noteId)
                .then(note => {
                    note.isPinned = !note.isPinned;
                    this.updateNote(note);
                });
        },
        editorClose() {
            this.noteEditor = false;
        }
    }
}