<template>
    <nav>
        <ul id="TheInlineMenu" class="nav small-caps justify-content-center">
            <li v-for="e of this.$t('layout.nav.entries')" :key="e.url"
                :class="'nav-item'+(e.children ? ' dropdown': '')"
                :style="{fontSize: '1.4em'}">
                <nuxt-link v-if="!e.children" class="nav-link" :to="localePath(e.url)">
                    {{ e.label }}
                </nuxt-link>
                <a v-if="e.children && e.children.length"
                   class="nav-link" href="#">
                    <span class="mr-2">{{ e.label }}</span>
                    <fa :icon="['fal', 'angle-down']"/>
                </a>
                <ul v-if="e.children && e.children.length" class="dropdown-menu">
                    <li v-for="c of e.children" :key="c.url" class="dropdown-item">
                        <nuxt-link :to="localePath(c.url)">
                            {{ c.label }}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "TheInlineMenu"
}
</script>

<style>
#TheInlineMenu a {
    color: var(--sede-light);
}

#TheInlineMenu a:hover {
    color: var(--sede-gray);
}

#TheInlineMenu .dropdown {
    padding: 0;
}

#TheInlineMenu .dropdown:hover  .dropdown-menu {
    display: block;
}

#TheInlineMenu .dropdown-menu {
    background-color: rgb(var(--sede-blue));
    border: 0;
    padding: 0;
    border-radius: 0;
    top: 95%;
}

#TheInlineMenu .dropdown-item {
    padding: 10px 15px;
    font-size: 1.2em;
}

#TheInlineMenu .dropdown-item:not(:first-child) {
    border-top: 1px solid rgba(var(--sede-dark), 0.2);
}

#TheInlineMenu .dropdown-item:hover {
    background-color: rgba(var(--sede-dark), 0.1);
}

</style>
