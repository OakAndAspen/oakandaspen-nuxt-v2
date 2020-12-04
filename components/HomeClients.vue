<template>
    <div class="section-light">
        <div class="container py-4">
            <div class="row">
                <div class="col-12 col-md-6 my-4 py-4">
                    <div class="row">
                        <div v-for="client in $t('accueil.clients.logos')" :key="client.name"
                             class="col-4 text-center mb-2">
                            <img :src="$imgSrc('clients/'+client.image)" class="img-fluid px-2">
                            <p class="small-caps mt-2">{{ client.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-4 d-flex align-items-center">
                    <div>
                        <h2 class="text-center">{{ $t('accueil.clients.title') }}</h2>
                        <p class="p-4 text-justify">{{ $t('accueil.clients.text') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeClients"
}
</script>
