<template>
    <fa class="NavSwitcher display-3 pointer"
        :icon="['fas', 'bars']"
        @click="$emit('toggleNav')"/>
</template>

<script>
export default {
    name: "NavSwitcher"
}
</script>
