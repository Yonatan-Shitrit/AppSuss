import {
    mailService
} from '../services/mailservice.js';

export default {
    template: `
    <form  class="new-mail" action="" @submit="sendMail">
    <div class="compose-header">
        <div class="compose-headline">New Mail</div>
    <img src="../../../img/keep/icons/back.png"  class="close-compose-head" alt="go back" @click="closeCompose">
        <!-- <button class="close-compose-head" @click="closeCompose">X</button> -->
    </div>
    
       <input v-model.lazy="mailTo" placeholder="to:" class="mail-to" type="email" requierd>    
       <input v-model.lazy="subject" placeholder="subject:" class="mail-subject" type="text" requierd>
       <textarea v-model.lazy="text" placeholder="Mail Body:" class="mail-body" required></textarea>
       <div class="compose-btns">
       <img src="../../../img/keep/icons/garbage.png"  class="close-compose-bottom" alt="go back" @click="closeCompose">
       <!-- <button class="close-compose-head" @click="closeCompose">X</button> -->
       <!-- <img  class="submit"  src="../../../img/keep/icons/send.jpg" type="submit" value="Send"> -->
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
                isSent: true
            }
            mailService.save(newMail)
                .then(mail => this.closeCompose(mail))


        },
        setRecivedMail() {
            if (this.mailRecived) {
                this.newNoteInput = this.mailRecived[0]+'\n'+'content:'+this.mailRecived[2];
                this.noteTitle = this.mailRecived[1];
                this.noteTitle
            }
        },
    

        closeCompose(mail) {
            this.$emit('compose', mail)
        }

    },
    computed: {

    },

}