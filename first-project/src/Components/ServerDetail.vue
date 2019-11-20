<template>
<div>
    <h2>Server: {{details.serverName}}</h2>
    <div>
        <p>Server Status: {{details.serverStatus}}</p>
        <p>Server Country: {{details.Location}}</p>
    </div>
</div>
</template>
<script>
export default {
    props: ['details']
}
</script>