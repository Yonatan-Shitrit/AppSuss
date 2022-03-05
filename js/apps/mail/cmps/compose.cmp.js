import {
    mailService
} from '../services/mailservice.js';

export default {
    template: `
    <form  class="new-mail" action="" @submit="sendMail">
    <div class="compose-header">
        <div class="compose-headline">New Mail</div>
    <img src="../../../img/keep/icons/back.png"  class="close-compose-head" alt="go back" @click="closeCompose">
    </div>
    
       <input v-model.lazy="mailTo" placeholder="to:" class="mail-to" type="email" requierd>   
       <input v-model.lazy="subject" placeholder="subject:" class="mail-subject" type="text" requierd>  
       <textarea v-model.lazy="text" placeholder="Mail Body:" class="mail-body" required></textarea>
       <div class="compose-btns">
       <img src="../../../img/keep/icons/garbage.png"  class="close-compose-bottom" alt="go back" @click="closeCompose">
       <input class="submit"  src="../../../img/keep/icons/send1.png" type="image" value="Send">
    </div>
       </form>

    `,
    data() {
        return {
            mailTo: '',
            subject: '',
            text: '',
        }

    },
    created(){
        this.checkMailRecived()

    },

    methods: {
        sendMail() {
            const newMail = {
                id: null,
                subject: this.subject,
                body: this.text,
                isRead: false,
                sentAt: Date.now(),
                to: 'user@appsus.com',
                from: this.mailTo,
                isSent: true,
                pic:"me"
            }
            mailService.save(newMail)
                .then(mail => this.closeCompose(mail))


        },
        checkMailRecived() {
            var noteRecived = this.getParams();
            if (noteRecived) {
                noteRecived = noteRecived.split('&');
            }
            this.setRecivedNote(noteRecived)
        },
        
        setRecivedNote(noteRecived) {
            if (noteRecived) {
                console.log(noteRecived)
                this.subject = noteRecived[0]
                this.text = noteRecived[1]

            }
        },
        getParams(){
            console.log(this.$route.params.mailInput);
            return this.$route.params.mailInput;
        },
    

        closeCompose(mail) {
            this.$emit('compose', mail)
            this.$router.push(`/mail`);
        }

    },
    computed: {

    },

}