import { mailService } from '../services/mailservice.js';

export default {
    template: `
    <form  class="new-mail" action="" @submit="sendMail">
    <div class="compose-header">New Mail</div>
       <input v-model.lazy="mailTo" placeholder="to:" class="mail-to" type="email" requierd></input>
       <input v-model.lazy="subject" placeholder="subject:" class="mail-subject" type="text" requierd></input>
       <textarea v-model.lazy="text" placeholder="Mail Body:" class="mail-body" required></textarea>
       <input class="submit" type="submit" value="Send"></input>
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
            .then (mail => this.closeCompose(mail))
        
           
         },

         closeCompose(mail){
             this.$emit('compose',mail)
         }
   
    },
    computed: {

    },

}