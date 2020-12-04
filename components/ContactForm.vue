<template>
    <div>
        <h4 class="t-dark font-weight-bold mb-3">
            {{$t('contact.form.title')}}
        </h4>

        <label for="ContactFormName">
            {{$t('contact.form.name')}}
        </label>
        <input id="ContactFormName"
               type="text"
               class="form-control mb-3"
               v-model="form.name"/>

        <label for="ContactFormEmail">
            {{$t('contact.form.email')}}
        </label>
        <input id="ContactFormEmail"
               type="text"
               class="form-control mb-3"
               v-model="form.email"/>

        <label for="ContactFormMessage">
            {{$t('contact.form.message')}}
        </label>
        <textarea id="ContactFormMessage"
                  class="form-control mb-3"
                  v-model="form.message"/>
        <button class="btn b-green w-100 t-white small-caps"
                :disabled="!isButtonEnabled"
                @click="send">
            {{$t('contact.form.button')}}
        </button>
        <div v-if="message"
             :class="'mt-4 text-center alert alert-' + color">
            {{message}}
        </div>
    </div>
</template>

<script>
    import emailjs from "emailjs-com";
    import {contactTemplateId, serviceId, userId} from "~/config/emailjs.js";

    export default {
        name: "ContactForm",
        data() {
            return {
                message: "",
                color: "",
                form: {
                    email: "",
                    name: "",
                    message: ""
                }
            }
        },
        computed: {
            isButtonEnabled() {
                let f = this.form;
                return (f.email && f.name && f.message);
            }
        },
        methods: {
            send() {
                let f = this.form;

                if (!f.email || !f.name || !f.message) {
                    this.message = this.$t('contact.messages.missing');
                    this.color = "warning";
                    return null;
                }

                if (!f.email.match(/[^@]+@[^.]+\..+/)) {
                    this.message = this.$t('contact.messages.emailIncorrect');
                    this.color = "warning";
                    return null;
                }

                this.message = this.$t('contact.messages.sending');
                this.color = "info";

                emailjs.send(serviceId, contactTemplateId, f, userId).then(r => {
                    if (r.status === 200) {
                        this.message = this.$t('contact.messages.success');
                        this.color = "success";
                    } else {
                        this.message = this.$t('contact.messages.error');
                        this.color = "danger";
                    }
                });
            }
        }
    }
</script>
