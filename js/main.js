import { router } from './router.js';
import appFooter from "./cmps/app-footer.cmp.js";
import appHeader from './cmps/app-header.cmp.js';



const options = {
    template: `
        <section class= "main-app-container">
            <app-header class= "app-header" />
            <router-view />
            <app-footer class= "app-footer"/>
        </section>
    `,
    components: {
        appHeader,
        appFooter
    }
};

const app = Vue.createApp(options);
app.use(router);
app.mount('#app');