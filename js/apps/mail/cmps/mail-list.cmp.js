export default {
    props: ['mails'],
    template: `
       <ul class="mail-list">
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                <div @click="selected(mail)">
                {{mail.subject}}
                </div>
            </li>
            
        </ul>
    `,
    data(){
        return {
            selectedId: null
        }
    },
    methods: {

        
   
    },
    computed: {

    },

}