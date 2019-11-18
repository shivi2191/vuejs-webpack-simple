<template>
    <div>
        <p>The framework used for building the application is {{name}}</p>
        <hr>
        <button @click="changeName">Change Framework</button>
    </div>
</template>

<script>
export default {
    data (){
        return {
            name :'Vue.js'
        }
    },
    methods: {
        changeName (){
            this.name = "Something Else totally!"
        }
    }
}
</script>

<style>

</style>