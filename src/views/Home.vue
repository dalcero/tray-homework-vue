<template>
    <div class="container">
        <HelloTray />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloTray from "@/components/HelloTray.vue";

export default {
    name: "Home",
    components: {
        HelloTray,
    },
};
</script>
