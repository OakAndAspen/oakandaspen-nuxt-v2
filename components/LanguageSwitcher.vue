<template>
    <ul class="LanguageSwitcher list-inline m-0 p-0">
        <li v-for="l of languages" :key="l.code"
            class="list-inline-item">
            <a :href="switchLocalePath(l.code)"
               :title="l.title">
                {{l.label}}
            </a>
        </li>
    </ul>
</template>

<script>

    export default {
        name: "LanguageSwitcher",
        data() {
            return {
                languages: [
                    {code: "fr", label: "fr", title: "Français"},
                    {code: "en", label: "en", title: "English"}
                ]
            }
        }
    }
</script>

<style>
    .LanguageSwitcher a {
        font-size: 1.4em;
    }
</style>
