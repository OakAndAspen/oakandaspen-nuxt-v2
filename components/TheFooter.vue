<template>
    <footer id="TheFooter"
            class="w-100 py-4 w-100 b-navy t-white">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 mt-4 text-center">
                    <h4>{{ $t('layout.footer.contactUs.title') }}</h4>
                    <p class="text-justify my-4">{{ $t('layout.footer.contactUs.text') }}</p>
                    <Button to="contact">{{ $t('layout.footer.contactUs.button') }}</Button>
                </div>
                <div class="col-12 col-md-6 mt-4">
                    <h4 class="text-center">{{ $t('layout.footer.info.title') }}</h4>
                    <contact-info class="t-white small-caps mx-auto"/>
                </div>
            </div>
            <hr/>
            <p class="mt-4 text-center small-caps">
                <span>
                    {{ $t('layout.footer.copyright') }}
                </span>
                <i>-</i>
                <span>
                {{ $t('layout.footer.author') }}
                <a href="https://oakandaspen.ch"
                   class="t-green">
                    Oak&Aspen
                </a>
            </span>
            </p>
        </div>
    </footer>
</template>

<script>
import Button from "@/components/Button.vue";
import ContactInfo from "~/components/ContactInfo.vue";

export default {
    name: "TheFooter",
    components: {ContactInfo, Button}
}
</script>

<style>
#TheFooter p {
    font-size: 0.8em;
}

#TheFooter i {
    margin-left: 5px;
    margin-right: 5px;
}
</style>
