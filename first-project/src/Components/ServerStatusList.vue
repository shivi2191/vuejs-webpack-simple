<template>
  <div id="idContainer">
    <my-servers :key="server.id"
      v-for="server in serverList" :server="server"></my-servers>
  </div>
</template>
<script>
import { EventBus } from "../main";
import ServerListComp from './ServerListComp.vue'
export default {
  data() {
    return {
      message: "Server Details have been updated!!",
      serverList: [{
        serverName: 'AP1',
        serverStatus: 'Critical',
        Location: 'Brazil'
      },
      {
        serverName: 'PPS',
        serverStatus: 'Normal',
        Location: 'Brazil'
      },
      {
        serverName: 'AP3',
        serverStatus: 'In Error',
        Location: 'Brazil'
      },
      {
        serverName: 'RM5',
        serverStatus: 'Not Available',
        Location: 'Brazil'
      }]
    };
  },
  components: {
    myServers : ServerListComp
  },
  created() {
    EventBus.$on("theheaderText", (value) => {
      debugger;
    });
  },
  methods: {
    checkServerStatus (oEvent, index, data) {
      debugger;
    }
  }
};
</script>
<style scoped>
#idContainer {
  background-color: chartreuse;
  width: 30%;
  display: grid;
}
</style>