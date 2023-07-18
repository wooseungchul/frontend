<template>
    <div>
        <ul>
            <li
                v-for="(data, idx) in talkMngList"
                :key="idx"
                @click="onMoveDetail(data.talkSeq)"
            >
                <span
                    >key: {{ data.talkSeq }}, userSeq: {{ data.userSeq }},
                    talkTitl: {{ data.talkTitl }}, talkCtnt:
                    {{ data.talkCtnt }}, inqCnt: {{ data.inqCnt }}, likeCnt:
                    {{ data.likeCnt }}, replCnt: {{ data.replCnt }}</span
                >
            </li>
        </ul>
    </div>
</template>

<script>
import communityApi from '@/api/community';

export default {
    name: 'FreeLancerTalk',
    data() {
        return {
            page: 1,
            rowPerPage: 10,
            pagingSize: 10,
            searchKeyword: '',

            talkMngList: [],
            talkMngListCnt: 0,
            pagination: {
                totalRecordCount: 0,
                totalPageCount: 1,
                startPage: 1,
                endPage: 1,
                limitStart: 1,
                existPrevPage: false,
                existNextPage: false,
            },
            talkMngInqCntTop3List: [],
            talkMngLikeCntTop3List: [],
            talkMngNonReplTop3List: [],
        };
    },
    mounted() {
        this.getCommunityTalkList();
    },
    methods: {
        /** 프리랜서톡 메인 데이터 조회 */
        getCommunityTalkList() {
            const param = {
                page: this.page, // 현재페이지
                rowPerPage: this.rowPerPage, // 한페이지 노출 게시글 수
                pagingSize: this.pagingSize, // 페이징 노출 갯수
                talkCd: '01', // 커뮤니티 구분코드(01: 프리랜서톡, 02: 정보공유톡)
                searchKeyword: this.searchKeyword, // 검색어
            };
            communityApi.getCommunityTalkList(param).then(response => {
                console.log(response);
                this.talkMngList = response?.data?.talkMngList ?? [];
                this.talkMngListCnt = response?.data?.talkMngListCnt ?? 0;
                if (response?.data?.pagination) {
                    this.pagination = response.data.pagination;
                }
                this.talkMngInqCntTop3List =
                    response?.data?.talkMngInqCntTop3List ?? [];
                this.talkMngLikeCntTop3List =
                    response?.data?.talkMngLikeCntTop3List ?? [];
                this.talkMngNonReplTop3List =
                    response?.data?.talkMngNonReplTop3List ?? [];
            });
        },

        onMoveDetail(talkSeq) {
            this.$router.push({
                name: 'freeLancerTalkDtl',
                query: { talkSeq: talkSeq },
            });
        },
    },
};
</script>

<style lang="scss"></style>
