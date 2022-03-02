import noteImgCmp from "./note-img.cmp.js"



export default {
    props: ['note'],
    template: `
        <section class="keep-note" >
            <h4>{{note.info.title}}</h4>
            <ul class="note-list" >
                <li v-for="(item, idx) in note.info.todos" @click="itemToggle(idx)" :class="{'line-through':item.done} ">
                    {{item.txt}}
                </li>
            </ul>
        </section>
    `,
    data(){
        return{
            thisNote: this.note,
        }
    },
    methods: {
        itemToggle(idx) {
            this.thisNote.info.todos[idx].done = !this.thisNote.info.todos[idx].done;
            this.$emit('listUpdate',this.thisNote);
        }
    }

}