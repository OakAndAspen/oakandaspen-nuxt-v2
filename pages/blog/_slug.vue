<template>
    <the-page-layout>
        <div class="container page-wrapper">
            <div class="row">
                <div class="col-12 col-md-8 mx-auto">
                    <img :src="$imgSrc('news/' + article.image)" :alt="article.title" class="img-fluid mb-4">
                    <h1>{{ article.title }}</h1>
                    <p class="t-gray"><i>{{ moment(article.date).format('DD.MM.YYYY') }}</i></p>
                    <nuxt-content :document="article"/>
                </div>
            </div>
        </div>
    </the-page-layout>
</template>

<script>

import moment from "moment";
import ThePageLayout from "~/layouts/ThePageLayout.vue";
import {getMetadata} from "~/utils/utils.js";

export default {
    name: "Article",
    components: {ThePageLayout},
    head() {
        return getMetadata({
            title: this.article.title,
            description: this.article.title,
            keywords: this.article.title
        });
    },
    data() {
        return {
            moment
        }
    },
    async asyncData({$content, params}) {
        let article = await $content('news/' + params.slug).fetch();

        return {
            article
        };
    }
}
</script>
