import { mailService } from '../services/mailservice.js';
import mailList from '../cmps/mail-list.cmp.js';
import sideBar from '../cmps/side-bar.cmp.js';
import compose from '../cmps/compose.cmp.js';
import mailDetails from '../cmps/mail-details.cmp.js';
import mailFilter from './../cmps/mail-filter.cmp.js';

export default {
    template: `
    <section class=" mail-app">
            <h3>Mail app</h3>
            <mail-filter @filtered="setFilter"/>
            <div class="mail-layout">
            <side-bar :perc=percentage @compose="toggleMenu" @inbox = "setFilter" @sent = "setFilter" />
            <mail-list :mails="mailsToShow" v-if="isShown" class="mail-list" @remove ="removeMail" @selected ="selectMail" @showDetails="showDetails" @unread ="isReadMail"/>
            <mail-details v-if="isMailDetail" :mails=" mailDetails"  @remove = "removeMail" @showDetails="showDetails"/>
             <compose v-if="isCompose" @compose="toggleMenu"/>
            </div>
            


        </section>
    `,
    data() {
        return {
            mails: null,
            isShown: true,
            isCompose: false,
            isMailDetail: false,
            filterBy: null,
            sortBy: null,
            selectedMail: null,
            percentage: this.showPercentage(),
            mailDetails: null,

        }
    },
    created() {
        this.loadMails();
        if(this.checkMailRecived()){
            console.log("hello there")
            toggleMenu()
        }
        // this.setRecivedMail();  
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
        showDetails(mail) {
            this.mailDetails = mail
            this.isMailDetail = !this.isMailDetail
        },
        selectMail(mail) {
            this.selectedMail = mail
        },
        removeMail(id) {
            mailService.remove(id)

                .then(this.loadMails);
        },
        isReadMail(mail) {
            mail.isRead = !mail.isRead
            mailService.save(mail)
                .then(() => {
                    this.loadMails()
                    // eventBus.$emit('showPerc')
                    this.showPercentage();
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        checkMailRecived() {
            console.log(this.getParams())
            var mailRecived = this.getParams();
            if (mailRecived) {
                this.mailRecived = mailRecived.split('&');
            }
        },
        getParams() {
            console.log(this.$route.params.mailInput);
            return this.$route.params.mailInput;
        },
        showPercentage(){
            mailService.readPercentage()
                .then(result =>{
                    this.percentage = Math.floor(result)
                })
                
            return this.percentage;
        },

    },
  
        computed:{
            mailsToShow() {
                if (!this.filterBy || this.filterBy==='inbox') return this.mails;
                if(this.filterBy==='sent'){
                    const sentMails = this.mails.filter(mail => {
                        return mail.isSent===true
                    })
                   
                return sentMails
            }
            const searchStr = this.filterBy.search.toLowerCase()
            var isRead = (this.filterBy.isRead === 'Read') ? true : false
            const filterMail = this.mails.filter(mail => {
                if (this.filterBy.isRead === 'All') {
                    return ((mail.subject.toLowerCase().includes(searchStr) || mail.body.toLowerCase().includes(searchStr) || mail.from.toLowerCase().includes(searchStr)))
                } else return ((mail.subject.toLowerCase().includes(searchStr) || mail.body.toLowerCase().includes(searchStr) || mail.from.toLowerCase().includes(searchStr)) && mail.isRead === isRead)
            })
            return filterMail;
        },
    },

    components: {
        mailList,
        sideBar,
        compose,
        mailDetails,
        mailFilter,



    }

}