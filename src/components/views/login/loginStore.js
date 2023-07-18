import api from '@/api/project';

const loginStore = {
    namespaced: true, // 모듈을 독립적으로 사용
    state: {
        loginFlag: false,
        token: '',
        loginInfo: null,
    },

    mutations: {
        // 토큰값 변경
        sto_setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        // 로그인페이지 여부 체크
        sto_setLoginFlag(state, payload) {
            console.log('[loginStore.js] : ', state, payload);
            state.loginFlag = payload;
        },
        // 로그인정보 입력
        sto_setLoginInfo(state, payload) {
            console.log('sto_setLoginInfo');
            console.log(payload);
            state.loginInfo = payload.loginInfo;
            localStorage.setItem('token', payload.token.accessToken);
            localStorage.setItem(
                'refreshTokenId',
                payload.token.refreshTokenId
            );
        },
    },

    actions: {},
};

export default loginStore;
