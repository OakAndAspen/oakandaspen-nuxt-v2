<template>
    <div :id="id" class="PxContainer" :style="style">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "PxContainer",
    props: {
        id: {
            type: String,
            required: true
        },
        height: {
            type: String,
            default: "100vh"
        },
        background: {
            type: String,
            default: "rgba(0,0,0,0)"
        }
    },
    computed: {
        style() {
            return {
                position: "relative",
                width: "100%",
                height: this.height,
                overflow: "hidden",
                background: this.background
            }
        }
    }
}
</script>
