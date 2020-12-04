<template>
    <div :id="id" class="PxElement" :style="style">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "PxElement",
    props: {
        id: {
            type: String,
            required: true
        },
        leftPx: Number,
        leftPer: Number,
        topPx: Number,
        speedX: {
            type: Number,
            default: 0
        },
        speedY: {
            type: Number,
            default: 1
        },
        width: {
            type: String,
            default: "100%"
        }
    },
    computed: {
        style() {
            return {
                width: this.width,
                position: "absolute"
            }
        }
    },
    methods: {
        onScroll() {
            let element = document.getElementById(this.id);
            let scrollY = window.scrollY;
            element.style.top = this.top() + scrollY * this.speedY + 'px';
            element.style.left = this.left() + scrollY * this.speedX + 'px';
        },
        left() {
            if (this.leftPx) return this.leftPx;
            if (this.leftPer) return window.innerWidth / 100 * this.leftPer;
            return 0;
        },
        top() {
            if (this.topPx) return this.topPx;
            return 0;
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.onScroll);
    },
    mounted() {
        this.onScroll();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
}
</script>

<style>

.PxElement img {
    width: 100%;
}

</style>
