import {
    mailService
} from '../services/mailservice.js';
import mailList from '../cmps/mail-list.cmp.js';
import sideBar from '../cmps/side-bar.cmp.js';
import compose from '../cmps/compose.cmp.js';

export default {
    template: `
    <section class=" mail-app">
            <h3>Mail app</h3>
            <div class="mail-layout">
            <side-bar @compose="toggleMenu"/>
            <mail-list :mails=mails v-if="isShown" class="mail-list"  :mails="mailsToShow" @remove = "removeMail" @selected = "selectMail" @unread = "isReaddMail"/>
             <compose v-if="isCompose" @compose="toggleMenu" />

            </div>
            


        </section>
    `,
    data() {
        return {
            mails: null,
            isShown: true,
            isCompose: false,
            filterBy: null,
            sortBy:null,
            selectedMail: null,
            percentage:null,

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

        toggleMenu(mail) {
            this.isCompose = !this.isCompose
            if (mail != null) {
                this.loadMails()
            }
        },
        selectMail(mail) {
            this.selectedMail = mail
        },
        removeMail(id) {
            mailService.remove(id)
            
                .then(this.loadMails);
        },
        isReaddMail(mail){
            mail.isRead = !mail.isRead
            mailService.save(mail)
                .then(()=>{
                    this.loadMails()
                    eventBus.$emit('showPerc')
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

    },
    components: {
        mailList,
        sideBar,
        compose,



    }

}