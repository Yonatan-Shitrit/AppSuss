import keepNotePreview from './keep-note-preview.cmp.js';
import noteColorPalette from './note-color-palette.cmp.js';
import noteDeleteScreen from './note-delete-screen.cmp.js';



export default {
    props: ['notes'],
    template: `
            <section class="keep-note-list pinned-notes">
            <ul>
                <li v-show="note.isPinned" v-for="note in notes" :key="note.id"  :style="note.style" @mouseleave="closePalette" class="note-preview-container">
                    <note-delete-screen v-show="deleteScreen===note.id" @mouseleave="closeDelete" @closeDeleteScreen="closeDelete" @deleteConfirm="noteManipulation('delete',note.id)" />
                    <img src="../../../img/keep/icons/pin.png" class="pinned-img" @click="togglePinned(note.id)">
                    <keep-note-preview :note="note" @listUpdate="updateList"/>
                    <note-color-palette v-if="colorPalette===note.id" @colorUpdate="updateColor"/>
                    <div class="note-tools">
                    <button @click="toggleDelete(note.id)">
                        <img src="../../../img/keep/icons/garbage.png" alt="">
                    </button>
                    <button @click="noteManipulation('edit',note.id)">
                        <img src="../../../img/keep/icons/edit.png" alt="">
                    </button>
                    <button @click="togglePalette(note.id)">
                        <img src="../../../img/keep/icons/palette.png" alt="">
                    </button>
                    <button @click="togglePinned(note.id)">
                        <img src="../../../img/keep/icons/pin.png" alt="">
                    </button>
                    <button @click="duplicate(note.id)">
                        <img src="../../../img/keep/icons/copy.png" alt="">
                    </button>
                    </div>
                </li>
            </ul>
        </section>
        <section class="keep-note-list">
            <ul>
                <li v-show="!note.isPinned" v-for="note in notes" :key="note.id"  :style="note.style" @mouseleave="closePalette" class="note-preview-container">
                    <note-delete-screen v-show="deleteScreen===note.id" @mouseleave="closeDelete" @closeDeleteScreen="closeDelete" @deleteConfirm="noteManipulation('delete',note.id)" />
                    <keep-note-preview :note="note" @listUpdate="updateList"/>
                    <note-color-palette v-if="colorPalette===note.id" @colorUpdate="updateColor"/>
                    <div class="note-tools">
                    <button @click="toggleDelete(note.id)">
                        <img src="../../../img/keep/icons/garbage.png" alt="">
                    </button>
                    <button @click="noteManipulation('edit',note.id)">
                        <img src="../../../img/keep/icons/edit.png" alt="">
                    </button>
                    <button @click="togglePalette(note.id)">
                        <img src="../../../img/keep/icons/palette.png" alt="">
                    </button>
                    <button @click="togglePinned(note.id)">
                        <img src="../../../img/keep/icons/pin.png" alt="">
                    </button>
                    <button @click="duplicate(note.id)">
                        <img src="../../../img/keep/icons/copy.png" alt="">
                    </button>
                    </div>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            colorPalette: 'green',
            deleteScreen: false
        }
    },
    components: {
        keepNotePreview,
        noteColorPalette,
        noteDeleteScreen
    },
    methods: {
        noteManipulation(type, noteId) {
            this.$emit(type, noteId);
        },
        updateList(note) {
            this.$emit('listUpdate', note);
        },
        togglePalette(id) {
            if (this.colorPalette === id) this.colorPalette = null;
            else this.colorPalette = id;
        },
        togglePinned(id) {
            this.$emit('pinned', id);
        },
        updateColor(color) {
            this.$emit('colorUpdate', { color, noteId: this.colorPalette });
        },
        closePalette() {
            this.colorPalette = null;
        },
        toggleDelete(id) {
            if (this.deleteScreen === id) this.deleteScreen = null;
            else this.deleteScreen = id;
        },
        closeDelete(){
            this.deleteScreen = null;
        }
    },
    computed: {
    }

}