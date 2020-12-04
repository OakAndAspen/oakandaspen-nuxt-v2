<template>
    <span @click="$emit('click')"
          :class="'Badge badge t-white small-caps mb-1 mr-1 px-2 py-1' + background + pointer">
        <slot/>
    </span>
</template>

<script>
export default {
    name: "Badge",
    props: {
        color: String,
        clickable: Boolean
    },
    computed: {
        background: function () {
            return ' b-' + (this.color || 'blue');
        },
        pointer: function () {
            return this.clickable ? ' pointer' : '';
        }
    }
}
</script>

<style>
.Badge {
    font-size: 0.9em;
}
</style>
