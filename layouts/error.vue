<template>
    <the-page-layout>
        <div class="container py-4 my-4 text-center">
            <h1 v-if="error.statusCode === 404" class="display-1">Perdu?</h1>
            <h1 v-else class="display-2">Une erreur s'est produite.</h1>
            <p v-if="error.statusCode === 404" class="display-3 my-4">Cette page n'existe pas.</p>
            <Button to="/" class="mt-4">Retour à la page d'accueil</Button>
        </div>
    </the-page-layout>
</template>

<script>
import Button from "@/components/Button.vue";
import ThePageLayout from "@/layouts/ThePageLayout.vue";
export default {
    components: {Button, ThePageLayout},
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
}
</script>
