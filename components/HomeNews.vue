<template>
    <carousel code="HomeNews" display-arrows>
        <div v-for="n in news" class="Slide" :style="background(n)">
            <div class="container h-100 t-white">
                <div class="Content row h-100">
                    <div class="TextBackground col-lg-6 p-4 ml-auto d-flex align-items-center">
                        <div class="mr-4">
                            <h2>{{ n.title }}</h2>
                            <p class="t-light"><i>{{ moment(n.date).format('DD.MM.YYYY') }}</i></p>
                            <nuxt-content :document="n"/>
                            <Button :to="localePath({ name: 'news-slug', params: { slug: n.slug } })">Lire la suite</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </carousel>
</template>

<script>
import Button from "@/components/Button.vue";
import Carousel from "@/components/Carousel.vue";
import moment from 'moment';

export default {
    name: "HomeNews",
    components: {Carousel, Button},
    props: {
        news: Array
    },
    data() {
        return {
            moment
        }
    },
    methods: {
        background(n) {
            let src = this.$imgSrc('news/' + n.image);
            return "backgroundImage: url(" + src + ");";
        }
    }
}
</script>

<style>

#HomeNews .Slide {
    background-position: center center;
    background-size: cover;
    height: 500px;
}

#HomeNews .TextBackground {
    background-color: rgba(var(--sede-navy), 0.9);
}

#HomeNews h2 {
    font-variant: normal;
}

#HomeNews .Content hr, #HomeNews .Content hr ~ * {
    display: none;
}

</style>
