import { mailService } from '../services/MailService.js';
// import { eventBus } from './../../../services/event-bus-service.js'


export default {
    props: ['percBar'],
    template: `
        <div class="percentage-bar">
            <div class="read-percentage" v-bind:style="{ width: computedWidth }">
                
                </div>
                <div class="read-percentage-number">read: {{percBar}}%</div>
        </div>`,
    data() {
        return {
            percentage:mailService.readPercentage()
            .then(result =>{
                this.percentage = Math.floor(result)
            }),
            style:{
                width:this.percentage/100 + 'px',
                opacity:1
            }
        }
    },
    created(){
        // eventBus.$on('showPerc',()=>{
        //         mailService.readPercentage()
        //             .then(result =>{
        //                 this.percentage = Math.floor(result)
        //             })
        // })
    },
    computed:{
        computedWidth(){
            console.log(this.percBar);
            return this.percBar + 'px'
        }
    }
}


