<template>
<div id="idContainer">
    <div id="List" class="col-xs-12 col-sm-6">
        <ol class="list-group">
            <li  id="idServerList" class="list-group-item"
                :key="index.id"
                v-for="index in serverList">Server: {{ index }}</li>
        </ol>
    </div>
    <div class="col-xs-12 col-sm-6">
        <p id="message">{{message}}</p>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                message : "Server Details have been updated!!",
                serverList: ['AP1', 'PPS', 'AP3','RM5' ]
            }
        }
    }
</script>
<style scoped>

li {
    border-bottom-style : solid;
    border-bottom-color: crimson;
    border-width: 2px;
    border-bottom-width: 2px;
    width: 40%;

}

#idContainer {
    background-color: chartreuse;
    width: 30%;
    display: grid;
}

#message {
      margin-left: 10px;
}
</style>