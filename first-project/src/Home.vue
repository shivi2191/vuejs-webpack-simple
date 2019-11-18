<template>
    <div>
        <my-message :key="info.id" v-for="info in 5"></my-message>  
    </div>
</template>

<script>
import InfoComponent from './Components/InfoComponent.vue'

export default {
    components: {
        'my-message' : InfoComponent
    }
}
</script>

<style>

</style>