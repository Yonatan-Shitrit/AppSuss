


export default {
    props: ['note'],
    template: `
        <section class="keep-note" >
            <h4>{{note.info.title}}</h4>
            <pre class="text">{{note.info.txt}}</pre>
        </section>
    `,

}