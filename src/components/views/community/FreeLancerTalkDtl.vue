<template>
    <div>
        {{ talkDtlInfo }}<br />
        <div>
            <a
                href="javascript:void(0);"
                v-for="(fileData, fileIdx) in talkDtlInfo.talkMngFileList"
                :key="fileIdx"
                @click="onTalkMngFileDownload(fileData.filePhysNm)"
                >{{ fileData.realFileNm }}</a
            >
        </div>
        <br />
    </div>
</template>

<script>
import communityApi from '@/api/community';
import http from '@/api/http';
import { lfCommon } from '@/api/fn_common';

export default {
    name: 'FreeLancerTalkDtl',

    data() {
        return {
            talkDtlInfo: {
                talkSeq: 0, //톡SEQ
                userSeq: 0, //사용자SEQ
                talkCd: '', //톡구분코드
                techCatgCd: '', //기술구분코드
                talkTitl: '', //톡제목
                talkCtnt: '', //톡내용
                inqCnt: 0, //조회수
                likeCnt: 0, //좋아요수
                fileId: '', //파일ID
                isILikeIt: '', //내좋아요여부
                talkMngFileList: [], // 톡게시물파일리스트
                talkReplDtlList: [], // 톡게시물 댓글,대댓글 리스트(좋아요, 파일)
            },
        };
    },

    mounted() {
        this.talkSeq = this.$route.query?.talkSeq ?? 0;

        this.getCommunityTalkDtl();
    },

    methods: {
        getCommunityTalkDtl() {
            const param = {
                talkSeq: this.talkSeq, // 게시글 SEQ
                userSeq: '', // 사용자 SEQ
            };
            communityApi.getCommunityTalkDtl(param).then(response => {
                const { data } = response;
                this.talkDtlInfo.talkSeq = data?.talkSeq ?? 0;
                this.talkDtlInfo.userSeq = data?.userSeq ?? 0;
                this.talkDtlInfo.talkCd = data?.talkCd ?? '';
                this.talkDtlInfo.techCatgCd = data?.techCatgCd ?? '';
                this.talkDtlInfo.talkTitl = data?.talkTitl ?? '';
                this.talkDtlInfo.talkCtnt = data?.talkCtnt ?? 0;
                this.talkDtlInfo.inqCnt = data?.inqCnt ?? 0;
                this.talkDtlInfo.fileId = data?.fileId ?? '';
                this.talkDtlInfo.isILikeIt = data?.isILikeIt ?? '';
                this.talkDtlInfo.talkMngFileList = data?.talkMngFileList ?? [];
                this.talkDtlInfo.talkReplDtlList =
                    data?.taltalkReplDtlListkSeq ?? [];
            });
        },

        onTalkMngFileDownload(filePhysNm) {
            // 공통 파일다운로드
            lfCommon.fileDownload(filePhysNm);
        },
    },
};
</script>

<style lang="scss"></style>
