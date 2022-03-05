import {mailService} from '../services/mailservice.js';
import percentageBar from './../cmps/percentage-bar.cmp.js'
export default {
    template: `
                <div class="side-bar">
                <button @click = "compose" >compose</button>
                
                <div class="folders">
                        <ul class="folder-list">
                            <div class="divside">
                                <li class="li" @click="inbox('inbox')">
                                    <div class="btn-inbox">Inbox</div>
                                </li>
                                <!-- <li class="li">Starred</li> -->
                                <li class="li-sent" @click="sent('sent')">
                                    <div class="btn-sent">Sent Mails</div>
                                </li>
                            </div>
                            <!-- <li class="li">Drafts</li> -->
                            <li>
                                <percentage-bar :percBar="showPercentage" v-model="percentage"></percentage-bar>
                            </li>
                            
                        </ul>
                    </div>
                </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        compose() {
            this.$emit('compose')
        },
        inbox() {
            this.$emit('inbox', "inbox")
        },
        sent() {
            this.$emit('inbox', "sent")
        },
        showPercentage(){
            mailService.readPercentage()
                .then(result =>{
                    this.percentage = Math.floor(result)
                })
                
            return this.percentage
        },




    },
    computed: {

    },
    components:{
        percentageBar,
    }

}