<template>
    <div class="col-xs-12">
        <footer>
            <p id="idFooter" class="classfooter">{{customFooter}}</p>
           
            <p>{{headerText}}</p>
        </footer>
    </div>
</template>
<script>
import { EventBus } from "../main"; 
export default {
    data(){
        return {
            headerText : ""
        }
    },
    props: {
        customFooter: {
            type: String,
            value: ""
        }
    },
    created(){
            debugger;
            EventBus.$on('emittedValue', (value)=>{
                debugger
                this.headerText = value;
            });
        },
    methods: {
        reverse(){
            this.value = "This is a custom Footer Message!"
           // this.$emit('customEvent', this.value)
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