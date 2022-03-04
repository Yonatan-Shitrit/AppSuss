import noteImg from './note-img.cmp.js';
import noteList from './note-list.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTxt from './note-txt.cmp.js';






export default {
    props: ['note'],
    template: `
        <section class="keep-note-preview">
            <component :is="note.type" :note="note" @listUpdate="updateList"></component>
        </section>
    `,
    components:{
        noteImg,
        noteList,
        noteTxt,
        noteVideo,
        
    },
    methods:{
        updateList(note){
            this.$emit('listUpdate',note);
        }
    }

}