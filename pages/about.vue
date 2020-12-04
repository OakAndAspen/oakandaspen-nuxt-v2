<template>
    <the-page-layout>
        <div class="container page-wrapper">
            <div class="row">
                <div class="col-12 col-lg-6 mb-4">
                    <h1 class="text-center mb-4">À propos</h1>
                    <nuxt-content :document="sede"/>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="jumbotron">
                        <div class="row">
                            <div class="col-sm-5 text-center">
                                <img :src="$imgSrc('fabienne-despot.jpg')" alt="Fabienne Despot"
                                     class="img-fluid mb-4" style="max-height: 200px;">
                            </div>
                            <div class="col-sm-7">
                                <nuxt-content :document="fd"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </the-page-layout>
</template>

<script>

import ThePageLayout from "~/layouts/ThePageLayout.vue";
import {getMetadata} from "~/utils/utils.js";

export default {
    name: "APropos",
    components: {ThePageLayout},
    head() {
        return getMetadata(this.$t("about.meta"));
    },
    async asyncData({$content}) {
        let sede = await $content('about/sede').fetch();
        let fd = await $content('about/fabienne-despot').fetch();

        return {
            sede, fd
        };
    }
}
</script>
