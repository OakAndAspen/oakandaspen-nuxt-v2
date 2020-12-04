<template>
    <div id="HomeHeader">
        <px-container id="scenery" background="#11314a">
            <px-element id="bg" :speed-y="0.5">
                <img :src="$imgSrc('parallax/bg.jpg')" alt="Background"/>
            </px-element>
            <px-element id="moon" :speed-x="-1" :speed-y="0.5" width="200px" :left-per="80">
                <img :src="$imgSrc('parallax/moon.png')" alt="Moon"/>
            </px-element>
            <px-element id="mountain" :top-px="200" :speed-y="-0.1">
                <img :src="$imgSrc('parallax/mountain.png')" alt="Mountain"/>
            </px-element>
            <px-element id="text" :top-px="200">
                <h2 id="text" class="text-center t-white display-font" style="font-size: 10em;">Moon Light</h2>
            </px-element>
            <px-element id="road" :top-px="500" :speed-y="0.15">
                <img :src="$imgSrc('parallax/road.png')" alt="Road"/>
            </px-element>
        </px-container>
    </div>
</template>

<script>

import PxContainer from "@/components/PxContainer.vue";
import PxElement from "@/components/PxElement.vue";

export default {
    name: "HomeHeader",
    components: {PxContainer, PxElement}
}
</script>

<style>

/* Adds a gradients at the bottom of the section */
#scenery::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #0a2a43, transparent);
    z-index: 10000;
}

/* Adds a blue veil on the picture */
#scenery::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 10000;
    mix-blend-mode: color;
}

</style>
