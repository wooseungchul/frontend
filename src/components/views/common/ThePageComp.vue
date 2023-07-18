<template>
    <div class="paging" v-show="pageShow">
        <button
            class="first"
            v-show="firstShow"
            @click="this.movePage('first')"
        >
            ◁◁
        </button>
        <button class="prev" v-show="prevShow" @click="this.movePage('prev')">
            ◁
        </button>
        <span>
            <a
                v-for="pageIdx in this.showPageNum"
                :key="pageIdx"
                href="javascript:void(0);"
                @click="this.movePage(pageIdx)"
                :class="{ active: pageIdx == this.currentPage }"
            >
                {{ pageIdx }}
            </a>
        </span>
        <button class="next" v-show="nextShow" @click="this.movePage('next')">
            ▷
        </button>
        <button class="last" v-show="lastShow" @click="this.movePage('last')">
            ▷▷
        </button>
    </div>
</template>

<script>
export default {
    props: ['pageInfo'],

    data() {
        return {
            firstShow: false,
            prevShow: false,
            nextShow: false,
            lastShow: false,
            pageShow: false,
            showPageNum: [],

            startPage: 1,
            endPage: 10,

            totalPage: 0, // 총 페이지
            currentPage: 1, // 현재 페이지
            pageCount: 0, // 한 페이지에 노출되는 데이터 수

            pageList: [], // 모든 데이터
            pageListTotalSize: 0, // 모든 데이터 사이즈
        };
    },

    mounted() {},

    methods: {
        /**
         * 변수 초기화
         */
        initData: function () {
            this.firstShow = false;
            this.prevShow = false;
            this.nextShow = false;
            this.lastShow = false;
            this.pageShow = false;
            this.showPageNum = [];

            this.startPage = 1;
            this.endPage = 10;

            this.totalPage = 0;
            this.currentPage = 1;
            this.pageCount = 0;

            this.pageList = [];
            this.pageListTotalSize = 0;
            this.pageCount = 0;
        },

        /**
         * 페이징 처리
         * @param pageParam
         */
        pagination: function (pageParam) {
            this.initData();

            this.pageList = pageParam.pageList; // 모든 데이터
            this.pageListTotalSize = this.pageList.length; // 모든 데이터 사이즈
            this.pageCount = pageParam.pageCount; // 한 페이지에 노출되는 데이터 수

            if (this.pageListTotalSize > 0) {
                this.pageShow = true;
            }

            if (this.pageListTotalSize > 0) {
                this.totalPage = Math.ceil(
                    this.pageListTotalSize / this.pageCount
                ); // 총 페이지 수
            }

            // 페이지 이동
            this.movePage(pageParam.page);
        },

        /**
         * 페이징 버튼 노출 정리
         */
        paginationArrangement: function () {
            if (this.currentPage > 1) {
                this.firstShow = true;
                this.prevShow = true;
            } else {
                this.firstShow = false;
                this.prevShow = false;
            }

            if (this.currentPage === this.totalPage) {
                this.nextShow = false;
                this.lastShow = false;
            } else {
                this.nextShow = true;
                this.lastShow = true;
            }

            /** 페이징 번호 시작번호 ~ 끝번호 */
            let displayPageNum = 10; // 페이지번호 노출 단위

            // 시작번호 구하기
            let startPage = this.currentPage / displayPageNum;
            if (startPage < Math.ceil(startPage)) {
                startPage = Math.floor(startPage) * displayPageNum + 1;
            } else {
                startPage = (Math.floor(startPage) - 1) * displayPageNum + 1;
            }
            this.startPage = startPage;
            // console.log('this.startPage ---> ' + this.startPage);

            // 끝번호 구하기
            let endPage = this.currentPage / displayPageNum;
            if (endPage > this.currentPage) {
                endPage = (Math.ceil(endPage) + 1) * displayPageNum;
            } else {
                endPage = Math.ceil(endPage) * displayPageNum;
            }

            if (this.totalPage < endPage) {
                this.endPage = this.totalPage;
            } else {
                this.endPage = endPage;
            }
            // console.log('this.endPage ---> ' + this.endPage);

            // for 노출
            this.showPageNum = [];
            for (let i = this.startPage; i <= this.endPage; i++) {
                this.showPageNum.push(i);
            }
        },

        /**
         * 페이지 이동
         */
        movePage: function (page) {
            if (typeof page === 'number') {
                this.currentPage = page;
            } else {
                if (page === 'first') {
                    this.currentPage = 1;
                } else if (page === 'prev') {
                    this.currentPage = this.currentPage - 1;
                } else if (page === 'next') {
                    this.currentPage = this.currentPage + 1;
                } else if (page === 'last') {
                    this.currentPage = this.totalPage;
                }
            }
            this.paginationArrangement(); // 페이징 버튼 노출 정리

            let sliceEnd = this.currentPage * this.pageCount;
            let sliceStart = sliceEnd - this.pageCount;

            // 페이지 데이터 잘라서 부모에게 전달
            let callbackData = {
                currentPage: this.currentPage,
                pageList: this.pageList.slice(sliceStart, sliceEnd),
            };
            this.$emit('setPageCompCallback', callbackData);
        },
    },
};
</script>
