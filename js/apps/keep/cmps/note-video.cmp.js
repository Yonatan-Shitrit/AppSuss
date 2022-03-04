


export default {
    props: ['note'],
    template: `
        <section class="keep-note">
            <h4>{{note.info.title}}</h4>
            <iframe :src="note.info.url" frameborder="0" width="100%" height="250"></iframe>
        </section>
    `,

}