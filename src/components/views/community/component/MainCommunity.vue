<template>
    <section class="section_board bg_gray">
        <div class="wrapper">
            <div class="board_wrap">
                <h2 class="title_sec tal">프리랜서 톡</h2>
                <hr />
                <ul class="board">
                    <li
                        v-for="(data, idx) in freeLancerTalkList"
                        :key="idx"
                        @click="onMovePage(data)"
                    >
                        <a href="javascript:void(0);">{{ data.talkTitl }}.</a
                        ><span class="count_cmt">{{ data.replCnt }}</span>
                    </li>
                </ul>
                <a href="javascript:void(0);" class="btn_more"
                    >더보기<i class="ico_arrow"></i
                ></a>
            </div>
            <div class="board_wrap">
                <h2 class="title_sec tal">정보공유 톡</h2>
                <hr />
                <ul class="board">
                    <li
                        v-for="(data, idx) in infoShareTalkList"
                        :key="idx"
                        @click="onMovePage(data)"
                    >
                        <a href="javascript:void(0);">{{ data.Titl }}.</a
                        ><span class="count_cmt">{{ data.replCnt }}</span>
                    </li>
                </ul>
                <a href="javascript:void(0);" class="btn_more"
                    >더보기<i class="ico_arrow"></i
                ></a>
            </div>
        </div>
    </section>
</template>

<script>
import communityApi from '@/api/community';

export default {
    name: 'MainCommunity',
    data() {
        return {
            freeLancerTalkList: [],
            infoShareTalkList: [],
        };
    },
    mounted() {
        this.getMainDataList();
    },
    methods: {
        getMainDataList() {
            communityApi.getMainDataList().then(response => {
                const { data } = response;
                this.freeLancerTalkList = data?.freeLancerTalkList ?? [];
                this.InfoShareTalkList = data?.infoShareTalkList ?? [];
            });
        },
        onMovePage(data) {
            this.$router.push({
                name: 'freeLancerTalkDtl',
                query: { talkSeq: data.talkSeq },
            });
        },
    },
};
</script>

<style></style>
