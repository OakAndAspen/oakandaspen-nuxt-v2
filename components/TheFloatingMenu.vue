<template>
    <div id="TheFloatingMenu"
         class="position-fixed container-fluid h-100 d-lg-none">
        <div class="row h-100">
            <nav class="col-12 col-sm-7 col-md-5 ml-auto h-100 p-4 b-blue">
                <div class="px-4 py-1">
                    <div class="d-flex justify-content-between align-items-baseline t-navy">
                        <header-logo/>
                        <nav-switcher @toggleNav="$emit('toggleNav')"/>
                    </div>
                    <ul class="nav flex-column mt-4">
                        <li v-for="e of this.$t('layout.nav.entries')" :key="e.url"
                            class="nav-item small-caps"
                            :style="{fontSize: '1.4em'}">
                            <nuxt-link class="nav-link px-0" :to="localePath(e.url)">
                                {{e.label}}
                            </nuxt-link>
                            <ul v-if="e.children && e.children.length"
                                class="nav flex-column ml-4">
                                <li v-for="c of e.children" class="nav-item">
                                    <nuxt-link :to="localePath(c.url)">
                                        {{c.label}}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li class="py-3">
                            <p class="text-dark small-caps">Retrouvez-nous sur</p>
                            <social-links/>
                        </li>
                        <li>
                            <p class="text-dark small-caps">Notre site est également disponible en</p>
                            <language-switcher/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import NavSwitcher from "@/components/NavSwitcher.vue";
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import SocialLinks from "~/components/SocialLinks.vue";

export default {
        name: "TheFloatingMenu",
        components: {NavSwitcher, HeaderLogo, LanguageSwitcher, SocialLinks}
    }
</script>

<style>
    #TheFloatingMenu {
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 200;
    }

    #TheFloatingMenu a {
        color: rgb(var(--sede-navy));
    }

    #TheFloatingMenu a:hover {
        color: rgb(var(--sede-dark));
    }

    #TheFloatingMenu .nav .nav a {
        font-size: 0.8em;
    }
</style>
