<template>
    <div class="container">
            <my-header></my-header>
        <hr>
            <my-server-list></my-server-list>
        <hr>
            <my-footer :customFooter="customFooterText" @customEvent="customFooterText = $event"></my-footer>
            <button @click="changeFooterMsg">Change the Footer Message</button>
    </div>
</template>

<script>
import PageHeader from './PageHeader.vue'
import ServerStatusList from './ServerStatusList.vue'
import PageFooter from "./PageFooter.vue"
    export default {
        components: {
            "my-header": PageHeader,
            "my-server-list": ServerStatusList,
            "my-footer": PageFooter
        },
        data(){
            return {
                customFooterText: 'This is a custom Footer Message!'
            };
        }, 
        methods: {
            changeFooterMsg () {
                this.customFooterText = "Here's a new custom Footer!!"
            }
        }
    }
</script>

<style>

</style>
