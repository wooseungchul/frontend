import { createStore } from 'vuex';
import sampleStore from '@/components/views/sample/sampleStore';
import ComAlertStore from '@/plugins/alert/ComAlertStore';
import ComLayerStore from '@/plugins/layer/ComLayerStore';

import loginStore from '@/components/views/login/loginStore';
import projectStore from '@/components/views/project/projectStore';
import muscatpeopleStore from '@/components/views/muscatpeople/muscatpeopleStore';
import communityStore from '@/components/views/community/communityStore';
import myinfoStore from '@/components/views/myinfo/myinfoStore';

const store = createStore({
    // 업무별 Store 나열
    modules: {
        sampleStore, // 샘플 스토어 TODO: 삭제 예정
        ComAlertStore, // 공통 알럿 스토어
        ComLayerStore, // 공통 Layer 스토어

        loginStore, // 로그인 스토어
        projectStore, // 프로젝트 스토어
        muscatpeopleStore, // 머스캣피플 스토어
        communityStore, // 커뮤니티 스토어
        myinfoStore, // 내정보 스토어
    },
});

export default store;
