<template>
    <div id="App">
        <the-floating-menu v-if="isMenuOpen"
                           @toggleNav="isMenuOpen = !isMenuOpen"/>
        <!--<the-title-bar @toggleNav="isMenuOpen = !isMenuOpen"/>-->
        <main>
            <slot/>
        </main>
        <the-footer/>
    </div>
</template>

<script>
import TheFloatingMenu from "~/components/TheFloatingMenu.vue";
import TheFooter from "~/components/TheFooter.vue";
import TheTitleBar from "~/components/TheTitleBar.vue";

export default {
    name: "ThePageLayout",
    components: {TheTitleBar, TheFloatingMenu, TheFooter},
    data() {
        return {
            isMenuOpen: false
        }
    }
}
</script>
