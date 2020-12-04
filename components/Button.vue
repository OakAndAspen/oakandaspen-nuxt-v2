<template>
    <nuxt-link :to="localePath(to)"
               class="btn b-green small-caps t-white">
        <slot/>
    </nuxt-link>
</template>

<script>
    export default {
        name: "Button",
        props: {
            to: String
        }
    }
</script>
