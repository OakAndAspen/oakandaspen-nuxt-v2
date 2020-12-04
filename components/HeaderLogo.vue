<template>
    <nuxt-link class="HeaderLogo d-flex align-items-baseline"
               :to="localePath('index')">
        <img class="img-fluid mb-2"
             :src="$imgSrc('logo.png')"
             alt="SEDE SA"/>
        <h1 class="t-navy display-font">SEDE SA</h1>
    </nuxt-link>
</template>

<script>

export default {
    name: "HeaderLogo"
}

</script>

<style>

.HeaderLogo img {
    max-height: 70px;
}

</style>
