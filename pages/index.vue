<template>
    <the-page-layout>
        <div id="Home">
            <home-header/>
            <div class="w-100 b-dark py-4">
                <div class="container">
                    <the-inline-menu class="d-none d-lg-block t-light"/>
                </div>
            </div>
            <div id="Content" class="container py-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed. Malesuada fames ac turpis egestas integer. Morbi non arcu risus quis. Vitae tempus quam pellentesque nec nam aliquam. Erat velit scelerisque in dictum non consectetur. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mauris in aliquam sem fringilla ut morbi tincidunt. Ut tellus elementum sagittis vitae et. Nunc non blandit massa enim nec dui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed. Malesuada fames ac turpis egestas integer. Morbi non arcu risus quis. Vitae tempus quam pellentesque nec nam aliquam. Erat velit scelerisque in dictum non consectetur. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mauris in aliquam sem fringilla ut morbi tincidunt. Ut tellus elementum sagittis vitae et. Nunc non blandit massa enim nec dui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed. Malesuada fames ac turpis egestas integer. Morbi non arcu risus quis. Vitae tempus quam pellentesque nec nam aliquam. Erat velit scelerisque in dictum non consectetur. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mauris in aliquam sem fringilla ut morbi tincidunt. Ut tellus elementum sagittis vitae et. Nunc non blandit massa enim nec dui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed. Malesuada fames ac turpis egestas integer. Morbi non arcu risus quis. Vitae tempus quam pellentesque nec nam aliquam. Erat velit scelerisque in dictum non consectetur. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mauris in aliquam sem fringilla ut morbi tincidunt. Ut tellus elementum sagittis vitae et. Nunc non blandit massa enim nec dui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed. Malesuada fames ac turpis egestas integer. Morbi non arcu risus quis. Vitae tempus quam pellentesque nec nam aliquam. Erat velit scelerisque in dictum non consectetur. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mauris in aliquam sem fringilla ut morbi tincidunt. Ut tellus elementum sagittis vitae et. Nunc non blandit massa enim nec dui.</p>
            </div>
        </div>
    </the-page-layout>
</template>

<script>
import HomeHeader from "~/components/HomeHeader.vue";
import TheInlineMenu from "~/components/TheInlineMenu.vue";
import TheTitleBar from "~/components/TheTitleBar.vue";
import ThePageLayout from "~/layouts/ThePageLayout.vue";
import {getMetadata} from "~/utils/utils.js";

export default {
    name: "Home",
    components: {HomeHeader, TheInlineMenu, TheTitleBar, ThePageLayout},
    head() {
        return getMetadata(this.$t("home.meta"));
    }
}
</script>

<style>


</style>
