<template>
    <div>
        <Header />
        <router-view />
        <Footer />

        <ComAlertComp />
        <ComLayerComp />
    </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
