<template>
      <ul class="list-group">
        <li
          id="idServerList"
          class="list-group-item"
          @click="checkServerStatus"
        >Server: {{ server.serverName }}</li>
      </ul>
</template>
<script>
import { EventBus } from "../main";
export default {
props: ['server'],
  data() {
    return {
      message: "Server Details have been updated!!"
    };
  },
  methods: {
    checkServerStatus (oEvent) {
      EventBus.$emit('serverDetail', this.server);
    }
  }
};
</script>
<style scoped>
li {
  border-bottom-style: solid;
  border-bottom-color: crimson;
  border-width: 2px;
  border-bottom-width: 2px;
  width: 40%;
}

#message {
  margin-left: 10px;
}
</style>