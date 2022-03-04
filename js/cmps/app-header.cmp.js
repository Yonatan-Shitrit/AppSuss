export default {
    template: `
        <header class="app-header">
            <div class="header-container">
            <router-link to="/">
                <h3>AppSuss</h3>
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
                </nav>
            </div>
        </header>
    
    `
}