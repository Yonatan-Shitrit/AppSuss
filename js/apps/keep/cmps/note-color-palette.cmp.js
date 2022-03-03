



export default {
    template: `
        <section class="note-color-palette" >
            <div @click="changeColor('#FBF8CC')" class="palette-color color1"></div>
            <div @click="changeColor('#FDE4CF')" class="palette-color color2"></div>
            <div @click="changeColor('#FFCFD2')" class="palette-color color3"></div>
            <div @click="changeColor('#F1C0E8')" class="palette-color color4"></div>
            <div @click="changeColor('#CFBAF0')" class="palette-color color5"></div>
            <div @click="changeColor('#A3C4F3')" class="palette-color color6"></div>
            <div @click="changeColor('#8EECF5')" class="palette-color color7"></div>
            <div @click="changeColor('#98F5E1')" class="palette-color color8"></div>
            <div @click="changeColor('#B9FBC0')" class="palette-color color9"></div>
        </section>
    `,
     methods: {
         changeColor(color){
            this.$emit('colorUpdate',color)
         }

     }

}