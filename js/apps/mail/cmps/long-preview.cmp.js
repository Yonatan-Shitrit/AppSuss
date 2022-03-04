export default {
    props: ['mail'],
    template: `
        <section class = "long-preview">
            <header class = "mail-preview-header">
                <div class = "-mail-preview-subject">
                    <h3>{{mail.subject}}</h3>
                </div>
                <div class = 'btns-long-preview'>
                    <div class="btn-trash" @click.stop="removeLongPreview(mail.id)">trash</div>
                    <div @click="showDetails (mail)" class="btn-full-mail"> show me</div>
                </div>
            </header>
            <div class="mail-preview-bottom">
                <h4>{{nameOfMailSend}}</h4>
                <p>{{mail.from}}</p>
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
            console.log("hello 2")
            this.$emit('showDetails', mail)
        },
    },
    computed: {
        descriptionText() {
            var text = this.mail.body
            return text.slice(0, 100) + "..."
        },
        nameOfMailSend() {
            const name = this.mail.from.split('@')
            return name[0]
        },

    },
}