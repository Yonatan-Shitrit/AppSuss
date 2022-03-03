import keepNotePreview from './keep-note-preview.cmp.js';
import noteColorPalette from './note-color-palette.cmp.js';



export default {
    props: ['notes'],
    template: `
        <section class="keep-note-list">
            <ul>
                <li v-for="note in notes" :key="note.id" :style="note.style" @mouseleave="closePalette" class="note-preview-container">
                    <keep-note-preview :note="note" @listUpdate="updateList"/>
                    <note-color-palette v-if="colorPalette===note.id" @colorUpdate="updateColor"/>
                    <div class="note-tools">
                    <button @click="noteManipulation('delete',note.id)">
                        <img src="../../../img/keep/icons/garbage.png" alt="">
                    </button>
                    <button @click="noteManipulation('edit',note.id)">
                        <img src="../../../img/keep/icons/edit.png" alt="">
                    </button>
                    <button @click="togglePalette(note.id)">
                        <img src="../../../img/keep/icons/palette.png" alt="">
                    </button>
                    </div>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            colorPalette: 'green',
        }
    },
    components: {
        keepNotePreview,
        noteColorPalette,
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
        updateColor(color) {
            this.$emit('colorUpdate', { color, noteId: this.colorPalette });
        },
        closePalette() {
            this.colorPalette = null;
        }
    },
    computed: {
    }

}