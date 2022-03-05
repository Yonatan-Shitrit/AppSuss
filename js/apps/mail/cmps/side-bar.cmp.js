import {mailService} from '../services/mailservice.js';
import percentageBar from './../cmps/percentage-bar.cmp.js'
export default {
    props:['perc'],
    template: `
                <div class="side-bar">
                <div class="compose-btn" @click = "compose" >compose</div>
                
                <div class="folders">
                        <ul class="folder-list">
                            <div class="divside">
                                <li class="li" @click="inbox('inbox')">
                                    <div class="button-sidebar">Inbox</div>
                                </li>
                                <!-- <li class="li">Starred</li> -->
                                <li class="li-sent" @click="sent('sent')">
                                    <div class="button-sidebar">Sent</div>
                                </li>
                            </div>
                            <!-- <li class="li">Drafts</li> -->
                            <li>
                                <percentage-bar :percBar="perc" ></percentage-bar>
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
        
        
        
        
    },
    computed: {
        showPercentage(){
            mailService.readPercentage()
                .then(result =>{
                    this.percentage = Math.floor(result)
                })
                
            return this.percentage;
        },
        
    },
    components:{
        percentageBar,
    }

}