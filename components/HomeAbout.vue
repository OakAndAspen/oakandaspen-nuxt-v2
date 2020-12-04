<template>
    <div id="HomeAbout" class="section-light" style="padding: 70px 0;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 py-4 text-center">
                    <h2>{{ $t('accueil.about.title') }}</h2>
                    <p class="p-4 text-justify">{{ $t('accueil.about.text') }}</p>
                </div>
                <div class="col-12 col-md-6 py-4 d-flex align-items-center">
                    <div class="row">
                        <div v-for="f in $t('accueil.about.fields')" class="col-4 text-center mb-2">
                            <nuxt-link :to="localePath('metier-domaines-application')">
                                <fa v-if="f.icon" :icon="['fas', f.icon]" class="display-2 t-green"/>
                                <img v-if="f.image" :src="$imgSrc('nose.png')" class="img-fluid"
                                     style="max-height: 40px;">
                                <span class="d-block small-caps mt-2">{{ f.title }}</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeAbout"
}
</script>
