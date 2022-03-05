import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import keepIndex from './apps/keep/pages/keep-index.cmp.js';
import MailApp from './apps/mail/pages/Mail-App.cmp.js';
import bookApp from './apps/book/views/book-app.cmp.js';
import bookDetails from './apps/book/views/book-details.cmp.js';





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
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },


];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});