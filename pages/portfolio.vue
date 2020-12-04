<template>
    <the-page-layout>
        <div class="container" style="padding-top: 100px; padding-bottom: 100px;">
            <div class="row">

                <!-- FILTER -->
                <div class="col-md-3 mb-4">
                    <h3 class="mb-4">Filtrer par thème</h3>
                    <div>
                        <badge v-for="tag in tags" :key="tag" clickable
                               :color="activeTags.find(t => t === tag) ? 'green' : ''"
                               @click="toggleTag(tag)">
                            {{ tag }}
                        </badge>
                    </div>
                </div>

                <!-- PROJECTS -->
                <div class="col-md-9">
                    <div class="row">
                        <div v-for="p in filteredProjects" :key="p.title" :id="p.slug"
                             class="col-md-6 mb-4">
                            <img :src="$imgSrc('projects/'+ p.image)"
                                 class="img-fluid" :alt="p.title">
                            <div class="mt-2">
                                <badge v-for="tag in p.tags" :key="tag">
                                    {{ tag }}
                                </badge>
                            </div>
                            <h4 class="small-caps mt-2">{{ p.title }}</h4>
                            <small class="font-italic t-gray">
                                {{ p.date }}{{ p.date && p.location && " - " }}{{ p.location }}
                            </small>
                            <nuxt-content :document="p"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </the-page-layout>
</template>

<script>

import Badge from "@/components/Badge.vue";
import Carousel from "@/components/Carousel.vue";
import ThePageLayout from "~/layouts/ThePageLayout.vue";
import {getMetadata} from "~/utils/utils.js";

export default {
    name: "Projets",
    components: {Badge, ThePageLayout, Carousel},
    props: {
        slides: Array
    },
    head() {
        return getMetadata(this.$t("portfolio.meta"));
    },
    data() {
        return {
            activeTags: []
        }
    },
    methods: {
        toggleTag(tag) {
            tag = tag.toLowerCase();
            if (!this.activeTags.find(t => t === tag)) this.activeTags.push(tag);
            else this.activeTags = this.activeTags.filter(t => t !== tag);
        }
    },
    computed: {
        tags() {
            let tags = [];
            for (let p of this.projects) {
                if (p.tags) {
                    for (let tag of p.tags) {
                        tag = tag.toLowerCase();
                        if (!tags.find(t => t === tag)) tags.push(tag);
                    }
                }
            }
            return tags;
        },
        filteredProjects() {
            return this.projects.filter(p => {
                if (!this.activeTags.length) return true;
                if (!p.tags) return false;
                let show = false;
                for (let pt of p.tags) {
                    for (let at of this.activeTags) {
                        if (pt.toLowerCase() === at.toLowerCase()) show = true;
                    }
                }
                return show;
            }).sort((a, b) => a.date > b.date ? -1 : 1);
        },
        shortText(text) {
            const limit = 100;
            let index = limit + text.slice(limit).indexOf(" ");
            return text.slice(0, index) + "...";
        }
    },
    async asyncData({$content, app}) {
        //console.log("My language is " + app.i18n.locale);
        let projects = await $content('projects').fetch();

        return {
            projects
        };
    }
}

</script>
