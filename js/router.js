import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import keepIndex from './apps/keep/pages/keep-index.cmp.js';
import MailApp from './apps/mail/pages/Mail-App.cmp.js';
import MailDetails from './apps/mail/pages/Mail-details.cmp.js';




const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/keep',
        component: keepIndex
    },
    {
        path: '/mail',
        component: MailApp
    },
    {
        path: '/mail/:mailId',
        component: MailDetails,
    },

];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});