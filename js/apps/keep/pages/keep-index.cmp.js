import { keepService } from '../services/keep-service.js';
import keepNoteCreator from '../cmps/keep-note-creator.cmp.js';
import keepNoteList from '../cmps/keep-note-list.cmp.js';
import keepNoteEditor from '../cmps/keep-note-editor.cmp.js';
import keepNoteFilter from '../cmps/keep-note-filter.cmp.js';



export default {
    template: `
        <section class="keep-index">
            <keep-note-creator :mailRecived @noteAdded="addNote"/>
            <keep-note-filter @filtered="setFilter"/>
            <keep-note-list :notes="notesToShow" @duplicateNote="duplicateTheNote" @delete="deleteNote" @pinned="togglePin" @edit="setEditor" @colorUpdate="updateColor" @listUpdate="updateList"/>
            <keep-note-editor v-if="noteEditor" @noteEdited="editNote" @closeEditor="editorClose" :note="noteEditor"/>
        </section>
    `,
    data() {
        return {
            notes: '',
            noteEditor: false,
            filterBy: null,
            mailRecived: null,
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes);
        this.checkMailRecived();

    },
    components: {
        keepNoteCreator,
        keepNoteList,
        keepNoteEditor,
        keepNoteFilter,
    },
    methods: {
        addNote(note) {
            this.notes.unshift(note);
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
        },
        duplicateTheNote(noteId) {
            keepService.get(noteId)
                .then(note => {
                    const newnote = note;
                    newnote.id = '';
                    keepService.save(newnote)
                        .then(note => this.addNote(note));
                });
        },
        setFilter(filter) {
            console.log('i set filter');
            this.filterBy = filter;
        },
        getParams() {
            console.log(this.$route.params);
            return this.$route.params.noteInput;
        },
        checkMailRecived() {
            var mailRecived = this.getParams();
            if (mailRecived) {
                this.mailRecived = mailRecived.split('&');
            }
        }
    },
    computed: {
        notesToShow() {
            console.log('i filter by ', this.filterBy);
            if (!this.filterBy) return this.notes;
            const regex = new RegExp(this.filterBy.text, 'i');
            return this.notes.filter(note => regex.test(note.info.title) || regex.test(note.info.txt));
        }

    }
}