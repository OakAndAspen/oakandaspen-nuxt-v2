<template>
    <div id="TheTitleBar"
         class="w-100 b-blue">
        <div class="container">
            <div class="row">
                <div class="mx-auto col-10 py-4">
                    <div class="d-flex justify-content-between align-items-baseline t-navy">
                        <header-logo class="mr-auto"/>
                        <the-inline-menu class="d-none d-lg-block"/>
                        <nav-switcher class="d-lg-none"
                                      @toggleNav="$emit('toggleNav')"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import NavSwitcher from "@/components/NavSwitcher.vue";
import TheInlineMenu from "@/components/TheInlineMenu.vue";

export default {
    name: "TheTitleBar",
    components: {NavSwitcher, TheInlineMenu, HeaderLogo}
}
</script>

<style>

#TheTitleBar {
    z-index: 100;
}

</style>
