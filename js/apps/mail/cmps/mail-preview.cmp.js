
export default {
    props: ['mail'],
    template: `
    <div class="mail-preview" :class="shadow" @mouseover="mouseover" @mouseleave="mouseleave">
        <div class="mail-subject">
        <p class="preview-sender" :class="bold"> {{nameOfMailSend}} </p>
        <p class="preview-subject" :class="bold"> {{mail.subject}}</p> 
        <p class="date" v-show="!isHover" :class="bold"> {{mailDate}}</p>
        <div class = "btns-mail-preview" v-show="isHover">
        <img src="../../../img/keep/icons/unread.png" alt="" class="btn-unread" :class="readUnread" @click.stop = "unread(mail)">
            <!-- <div :class="readUnread" @click.stop = "unread(mail)">unread</div> -->
            <img src="../../../img/keep/icons/garbage.png" alt="" class="btn-trash" @click.stop="removePreview(mail.id)">
        </div>
        </div> 
    </div>`,

    data() {
        return {
            isHover: false,
            isRead: this.mail.isRead,
        }
    },
    methods: {
        mouseover() {
            return this.isHover = true
        },
        mouseleave() {
            return this.isHover = false
        },
        removePreview(mailId) {
            this.$emit('removePreview', mailId);
        },
        unread(mail) {
            this.$emit('readUnread', mail)
            return this.isRead = !this.isRead
        },

    },
    computed: {
        nameOfMailSend() {
            const name = this.mail.from.split('@')
            return name[0]
        },
        shadow() {
            return {
                hover: this.isHover
            }
        },
        bold() {
            return {
                bold: this.isRead === false
            }
        },
        readUnread() {
            return {
                read: this.isRead === true,
                unread: this.isRead === false
            }
        },
        mailDate() {
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date(this.mail.sentAt)
            return monthNames[date.getMonth()] + ' ' + date.getDate()
        }
    },
}