export default {
    template: `
        <header class="app-header">
            <div class="header-container">
            <router-link to="/">
                <img class=logo src="../../img/appsus/img/logo.png" alt="">
            </router-link>
                <nav class="head-nav">
                    <router-link to="/">
                    <img src="../../img/appsus/icons/home.png" alt="">
                    </router-link>
                    <router-link to="/mail">
                        <img src="../../img/appsus/icons/email.png" alt="">
                    </router-link>
                    <router-link to="/keep"> 
                        <img src="../../img/appsus/icons/note.png" alt="">
                    </router-link>
                    <router-link to="/book"> 
                        <img src="../../img/appsus/icons/book.png" alt="">
                    </router-link>
                </nav>
            </div>
        </header>
    
    `
}