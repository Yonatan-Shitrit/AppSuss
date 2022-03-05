export default {
    props: ['mail'],
    template: `
        <section class = "long-preview">
            <header class = "mail-preview-header">
                <div class = "-mail-preview-subject">
                    <p class="long-preview-subject">{{mail.subject}}</p>
                </div>
                <div class = 'btns-long-preview'>
                    <!-- <div @click="showDetails (mail)" class="btn-full-mail"> show me</div> -->
                    <img src="../../../img/keep/icons/expand.jpg" alt="" class="btn-full-mail" @click.stop="showDetails (mail)">
                    <img src="../../../img/keep/icons/garbage.png" alt="" class="btn-trash" @click.stop="removeLongPreview(mail.id)">
                </div>
            </header>
            <div class="mail-preview-bottom">
                <p class="sender-name-log-preview" >{{nameOfMailSend}}</p>
                <p class="small-adress"><{{mail.from}}></p>
            </div>
            <p class = "preview-txt">{{descriptionText}}</p>
        </section>`,

    data() {
        return {
            isReadMore: false
        }
    },
    methods: {
        removeLongPreview(mailId) {
            this.$emit('removeLongPreview', mailId);
        },
        // fullMail(mailId){
        //     this.$emit('fullMail', mailId);
        // },
        showDetails(mail) {
            this.$emit('showDetails', mail)
        },
    },
    computed: {
        descriptionText() {
            var text = this.mail.body
            return text.slice(0, 100) + `...`
        },
        nameOfMailSend() {
            const name = this.mail.from.split('@')
            return name[0]
        },

    },
}