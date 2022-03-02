import { mailService } from '../services/mailservice.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    template:`
        <section class="mail-index">
            <h3>Mail app</h3>
            <button @click="showmail">hello</button>
            <mail-list :mails=mails />


        </section>
    `,
    data() {
        return {
            mails: null,
        }
    },
    created() {
        this.loadMails();
    },
    methods: {
        loadMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                });
        },
        //testing mails are loaded
        showmail(){
            console.log(this.mails)
        }
    },
    components: {
        mailList,

    }

}