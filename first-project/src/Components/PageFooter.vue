<template>
    <div class="col-xs-12">
        <h1>Server Details</h1>
        <div>
            <my-server-detail :details="detail"></my-server-detail>
            <button @click="changeStatus">Change Server Status</button>
        </div>
    </div>
</template>
<script>
import { EventBus } from "../main";
import ServerDetail from "./ServerDetail"
export default {
    components: {
        myServerDetail: ServerDetail
    },
    data(){
        return {
            headerText : "",
            detail: {}
        }
    },
    props: {
        customFooter: {
            type: String,
            value: ""
        }
    },
    created(){
            EventBus.$on('emittedValue', (value)=>{
                this.headerText = value;
            });

            EventBus.$on('serverDetail', (serverData)=>{
                this.detail = serverData;
            })
        },
    methods: {
        reverse(){
            this.value = "This is a custom Footer Message!"
           // this.$emit('customEvent', this.value)
        },
        changeStatus() {
            if(this.detail.serverStatus===undefined){
                alert('No Details found!')
                return false;
            }
            this.detail.serverStatus = "Normal";
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