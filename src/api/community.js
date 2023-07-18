import http from '@/api/http';

export default {
    /** 피플 메인 커뮤니티 데이터 조회 */
    async getMainDataList() {
        return await http.post('community/getMainDataList');
    },
    /** 커뮤니티 톡 메인 데이터 조회 (프리랜서, 정보공유) */
    async getCommunityTalkList(param) {
        return await http.post('community/getCommunityTalkList', param);
    },

    /** 커뮤니티 톡 게시글 상세 데이터 조회 (프리랜서, 정보공유) */
    async getCommunityTalkDtl(param) {
        return await http.post('community/getCommunityTalkDtl', param);
    },
};
