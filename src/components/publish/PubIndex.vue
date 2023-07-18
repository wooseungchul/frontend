<template>
    <div>
        <h1>퍼블리싱 작업내역</h1>
        <ul>
            <li>
                <!-- 라우터 name 작성 -->
                <button @click="routerMove('Main')">Main.vue</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PubIndex',
    methods: {
        routerMove(name) {
            this.$router.push({ name })
        }
    }

}
</script>

<style lang="scss">

</style>