<template>
    <div class="container">
            <my-header></my-header>
        <hr>
            <my-server-list></my-server-list>
        <hr>
            <my-footer></my-footer>
    </div>
</template>

<script>
import PageHeader from './Components/PageHeader.vue'
import ServerStatusList from './Components/ServerStatusList.vue'
import PageFooter from "./Components/PageFooter.vue"

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
        }
    }
</script>

<style>

</style>
