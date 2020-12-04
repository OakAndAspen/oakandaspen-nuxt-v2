<template>
    <div id="HomeProjects" class="section-grey">
        <div class="container my-4 py-4">
            <h2 class="text-center mb-4">Nos projets récents</h2>
            <carousel code="HomeProjects" controls-color="dark" display-arrows>
                <div v-for="p in filteredProjects" class="row m-4">
                    <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <img :src="$imgSrc('projects/'+ p.image)" class="img-fluid mb-4 mb-md-0"/>
                    </div>
                    <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h4>{{ p.title }}</h4>
                        <small class="font-italic t-gray">
                            {{ p.date }}{{ p.date && p.location && " - " }}{{ p.location }}
                        </small>
                        <nuxt-content :document="p"/>
                        <nuxt-link :to="localePath('projets')+'#'+p.slug" class="d-block">Lire la suite...</nuxt-link>
                    </div>
                </div>
            </carousel>
        </div>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
    name: "HomeProjects",
    components: {Carousel},
    props: {
        projects: Array
    },
    computed: {
        filteredProjects() {
            return this.projects
                .filter(p => p.homepageIndex !== 0)
                .sort((a, b) => a.homepageIndex > b.homepageIndex ? 1 : -1);
        }
    }
}
</script>

<style>
#HomeProjects .nuxt-content {
    height: 150px;
    overflow: hidden;
}
</style>
