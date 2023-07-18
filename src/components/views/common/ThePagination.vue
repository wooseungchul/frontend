<template>
    <div>
        <a
            href="javascript:void(0);"
            v-if="existPrevPage"
            @click="setPageCallback(1)"
            >첫페이지</a
        >
        <a
            href="javascript:void(0);"
            v-if="existPrevPage"
            @click="setPageCallback(startPage - 1)"
            >이전 페이지</a
        >
        <p v-for="(data, idx) in pagination" :key="idx">
            <a
                href="javascript:void(0);"
                v-if="data !== currentPage"
                @click="setPageCallback(data)"
                >{{ data }}
            </a>
            <span v-else>{{ data }}</span>
        </p>

        <a
            href="javascript:void(0);"
            v-if="existNextPage"
            @click="setPageCallback(endPage + 1)"
            >다음페이지</a
        >
        <a
            href="javascript:void(0);"
            v-if="existNextPage"
            @click="setPageCallback(totalPageCount)"
            >마지막 페이지</a
        >
    </div>
</template>

<script>
export default {
    name: 'ThePagination',
    data() {
        return {
            currentPage: 1,
            startPage: 1,
            endPage: 1,
            limitStart: 1,
            totalPageCount: 0,
            existNextPage: false,
            existPrevPage: false,
        };
    },
    computed: {
        pagination() {
            let pageList = [];
            for (let i = this.startPage; i <= this.endPage; i++) {
                pageList.push(i);
            }
            return pageList;
        },
    },
    methods: {
        setPageCallback(page) {
            this.$emit('setPageCallback', page);
        },
        setPagination(pagination) {
            console.log(pagination);
            this.currentPage = pagination.currentPage;
            this.startPage = pagination.startPage;
            this.endPage = pagination.endPage;
            this.limitStart = pagination.limitStart;
            this.totalPageCount = pagination.totalPageCount;
            this.existNextPage = pagination.existNextPage;
            this.existPrevPage = pagination.existPrevPage;
        },
    },
};
</script>

<style lang="scss"></style>
