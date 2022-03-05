import {mailService} from '../services/MailService.js';

export default {
    props: ['mails'],
    template: `
        <section  class="mail-details">
                <div class = "mail-header">
                        <div class="detail-mail-subject">{{mails.subject}}</div>
                        <div class = 'btns-details'>
                            <!-- <div class="btn-back" @click.stop="backToMails">go back</div> -->
                            <img src="../../../img/keep/icons/back.png" alt="go back to mail" class="btn-go-back" @click.stop="backToMails" >
                            <img src="../../../img/keep/icons/forward2.png" alt="send to notes" class="btn-forward" @click="sendToKeep" >
                            <img src="../../../img/keep/icons/garbage.png" alt="delete mail" class="btn-trash" @click.stop="remove(mails.id)">
                            <!-- <div  >remove</div> -->
                        </div>
                    </div>
                    <div class="sub-header-details">
                        <div class="detail-sender" >{{nameOfMailSend}}</div>
                        <p class="detail-mail-sender"><{{mails.from}}></p>
                    </div>
                 <p class="detail-mail-body">{{mails.body}}</p>
        </section>



           

            
        
        <!-- <section v-else class="loader app-main">
            <h2>Loading...</h2>
        </section> -->
    `,
    data() {
        return {
            mail: null,
            // nextMailId: null
        };
    },
    created() {
        window.history.replaceState('', 'Title', '#/mail/' + `${this.mails.id}`)
    },
    methods: {
        sendToKeep() {  
            console.log("show details")
            this.$router.push(`/keep/from:${this.mails.from}&${this.mails.subject}&${this.mails.body}`)
        },
        remove(mailId) {
            window.history.replaceState('', 'Title', '#/mail/')
            this.$emit('remove', mailId)
            this.backToMails()


        },

        backToMails(mail) {
            this.$emit('showDetails', mail)
            window.history.replaceState('', 'Title', '#/mail/')
        }
    },
    computed: {
        nameOfMailSend() {
            const name = this.mails.from.split('@')
            return name[0]
        },
    },
};