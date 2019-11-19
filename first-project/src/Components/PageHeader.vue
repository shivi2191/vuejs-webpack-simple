<template>
        <header>
            <h1>{{MyHeader()}}</h1>
            <button @click="emitMyHeader">Emit</button>
        </header>
</template>
<script>
import { EventBus } from '../main'; 
export default {
    data (){
        return {
            headerText:""
            }
    },
    
    methods: {
        MyHeader: function(){
            this.headerText = "Welcome to Server Status Page"
            return  this.headerText;
        },
        emitMyHeader: function(){
            debugger;
            EventBus.$emit('emittedValue', this.headerText);
        }
    }
}
</script>