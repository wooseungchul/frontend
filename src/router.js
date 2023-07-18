import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/components/Home.vue';

import loginRouter from '@/components/views/login/loginRouter';
import projectRouter from '@/components/views/project/projectRouter';
import muscatpeopleRouter from '@/components/views/muscatpeople/muscatpeopleRouter';
import communityRouter from '@/components/views/community/communityRouter';
import myinfoRouter from '@/components/views/myinfo/myinfoRouter';

//TODO: 제거 예정 S
import sampleRouter from '@/components/views/sample/sampleRouter';
//TODO: 제거 예정 E

import publishRouter from '@/components/publish/publishRouter.js';

const routes = [
    // 업무별 라우터 나열
    ...loginRouter, // 로그인
    ...projectRouter, // 프로젝트
    ...muscatpeopleRouter, // 머스캣피플
    ...communityRouter, // 커뮤니티
    ...myinfoRouter, // 내정보

    //TODO: 제거예정
    ...sampleRouter,

    ...publishRouter, // 퍼블리싱

    {
        path: '/',
        name: 'home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    // console.log('beforeEach');
    // if(to.query.key!=undefined) {
    //     localStorage.setItem(to.query.key, JSON.stringify(to.query));
    // }
    // console.log(to);
    // console.log(from);
    next();
    // history.pushState(null, "", to.path);
    history.replaceState({}, '', to.path); // replace
    history.replaceState(history.state, '', to.path); // with
});

export default router;
