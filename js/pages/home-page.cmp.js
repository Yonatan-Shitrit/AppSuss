export default {
    template: `
        <section class="home-page">
            <div class="home-main-container">
                <div class="home-content-container">
                    <img src="../../img/appsus/img/books.jpg" alt="">
                    <div class="home-description-container">
                        <h4>Miss Books</h4>
                        <p>Great book selection and many more book buying features</p>
                        <router-link to="/book">Get Started!</router-link>
                    </div>
                </div>
                <div class="home-content-container">
                    <img src="../../img/appsus/img/notes.jpg" alt="">
                    <div class="home-description-container">
                        <h4>Miss keep</h4>
                        <p>A place to keep everything you need to remamber and manage your tasks</p>
                        <router-link to="/keep">Get Started!</router-link>
                    </div>
                </div>
                <div class="home-content-container">
                    <img src="../../img/appsus/img/email.jpg" alt="">
                    <div class="home-description-container">
                        <h4>Mister email</h4>
                        <p>The top user friendly email application that has all your needs covered</p>
                        <router-link to="/mail">Get Started!</router-link>
                    </div>
                </div>
            </div>
            
        </section>
    `,
}