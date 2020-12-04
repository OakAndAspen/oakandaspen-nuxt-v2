<template>
    <ul class="SocialLinks list-inline m-0 p-0">
        <li v-for="l of $t('layout.socialLinks')" :key="l.title"
            class="list-inline-item">
            <a :href="l.url"
               :title="l.title"
               class="mr-2">
                <fa :icon='["fab", l.icon]'/>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "SocialLinks"
    }
</script>

<style>
    .SocialLinks a {
        font-size: 1.4em;
    }
</style>
