<template>
    <the-page-layout>
        <div class="container page-wrapper">
            <div class="row">
                <div class="col-12 col-md-6 mb-4">
                    <h2 class="text-center mb-4">{{ $t('contact.info.title') }}</h2>
                    <contact-info class="mx-auto"/>
                </div>
                <div class="col-12 col-md-6 mb-4">
                    <contact-form/>
                </div>
            </div>
        </div>
    </the-page-layout>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "~/components/ContactInfo.vue";
import ThePageLayout from "~/layouts/ThePageLayout.vue";
import {getMetadata} from "~/utils/utils.js";

export default {
    name: "Contact",
    components: {ContactForm, ContactInfo, ThePageLayout},
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: ""
            }
        }
    },
    head() {
        return getMetadata(this.$t("contact.meta"));
    },
    computed: {
        isValid: function () {
            let f = this.form;
            return (f.name && f.email && f.message);
        }
    }
}
</script>
