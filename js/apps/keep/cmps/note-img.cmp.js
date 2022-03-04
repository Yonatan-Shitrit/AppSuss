


export default {
    props: ['note'],
    template: `
        <section class="keep-note" >
            <h4>{{note.info.title}}</h4>
            <img :src="note.info.url" onerror="this.onerror=null; this.src='../../../img/keep/img/imgbroke.jpg'">
        </section>
    `,

}