<template>
    <div class="col-12 col-sm-6 mb-4">
        <nuxt-link :to="localePath(link)"
           class="d-flex align-items-center justify-content-center h-100 w-100 t-blue">
            <h2 class="m-4 text-center">
                <slot/>
            </h2>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: "TitleSquare",
    props: ["link"]
}
</script>

<style scoped>
h2 {
    font-size: 1.8em;
    font-weight: bold;
    color: white
}

a:hover {
    text-decoration: none;
}
</style>
