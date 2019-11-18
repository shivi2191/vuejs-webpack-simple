<template>
    <div class="col-xs-12">
        <footer>
            <p id="idFooter" class="classfooter">{{customFooter}}</p>
            <button @click="reverse">Reverse the Text</button>
        </footer>
    </div>
</template>
<script>
export default {
    // data(){
    //     return {
    //         footerMessage : "All Servers are managed here!"
    //     }
    // },
    props: {
        customFooter: {
            type: String,
            required: true,
            value: ""
        }
    },
    methods: {
        reverse(){
            this.value = "This is a custom Footer Message!"
            this.$emit('customEvent', this.value)
        }
    }
}
</script>
<style scoped>
#idFooter {
    margin-left: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-display: unset;
    font-style: oblique;
    font-size: 2rem
}
</style>