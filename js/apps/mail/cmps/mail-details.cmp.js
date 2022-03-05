import {mailService} from '../services/MailService.js';

export default {
    props: ['mails'],
    template: `
        <section  class="mail-details">
                <div class = "mail-header">
                        <div>{{mails.subject}}</div>
                        <div class = 'btns-details'>
                            <!-- <div class="btn-back" @click.stop="backToMails">go back</div> -->
                            <img src="../../../img/keep/icons/back.png" alt="go back" class="btn-go-back" @click.stop="backToMails" >
                            <div @click="sendToKeep" class="btn-Keep">sep</div>
                            <img src="../../../img/keep/icons/garbage.png" alt="" class="btn-trash" @click.stop="remove(mails.id)">
                            <!-- <div  >remove</div> -->
                        </div>
                    </div>
                    <div class="sub-header-details">
                        <div>{{nameOfMailSend}}</div>
                        <p><{{mails.from}}></p>
                        <p class="mail-body">{{mails.body}}</p>
                    </div>
                
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
        // sendToKeep() {
        //     this.$router.push(`/keep?from=${this.mail.from}&subject=${this.mail.subject}&body=${this.mail.body}`);
        // },
        remove(mailId) {
            window.history.replaceState('', 'Title', '#/mail/')
            this.$emit('remove', mailId);
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