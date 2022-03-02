import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import keepIndex from './apps/keep/pages/keep-index.cmp.js';
import mailIndex from './apps/mail/pages/mail-index.cmp.js';



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
        component: mailIndex
    },

];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});