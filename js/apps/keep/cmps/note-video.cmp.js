


export default {
    props: ['note'],
    template: `
        <section class="keep-note">
            <h4>{{note.info.title}}</h4>
            <p>video here {{note.info.url}}</p>
        </section>
    `,

}