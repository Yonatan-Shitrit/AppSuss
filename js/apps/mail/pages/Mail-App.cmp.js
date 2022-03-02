import { mailService } from '../services/mailservice.js';
import mailList from '../cmps/mail-list.cmp.js';
import sideBar from '../cmps/side-bar.cmp.js';
import compose from '../cmps/compose.cmp.js';

export default {
    template:`
    <section class=" mail-app">
            <h3>Mail app</h3>
            <div class="mail-layout">
            <side-bar @compose="toggleMenu"/>
            <mail-list :mails=mails v-if="isShown" class="mail-list"/>
             <compose v-if="isCompose" @compose="toggleMenu" />

            </div>
            


        </section>
    `,
    data() {
        return {
            mails: null,
            isShown: true,
            isCompose: false,

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

        toggleMenu(mail){
            this.isCompose = !this.isCompose
            if (mail != null){  
            this.loadMails()
            }
        },

    },
    components: {
        mailList,
        sideBar,
        compose,



    }

}