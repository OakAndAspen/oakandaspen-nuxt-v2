<template>
    <div class="section-grey">
        <div class="container py-4 text-center">
            <h1 class="my-4">Nos outils</h1>
            <div class="row">
                <div v-for="(tool, index) in tools.slice(0,3)" :key="tool.title"
                     class="col-6 col-md-4 mb-4 p-4">
                    <div class="text-center">
                        <img :src="$imgSrc('tools/'+tool.image)" :alt="tool.title"
                             class="img-fluid" style="max-height: 150px; max-width: 150px;">
                        <h2 class="my-4">{{ tool.title }}</h2>
                    </div>
                </div>
            </div>
            <nuxt-link :to="localePath('metier-logiciels')" class="btn btn-info small-caps mb-4">
                Découvrir nos outils
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeTools",
    props: {
        tools: Array
    }
}
</script>
