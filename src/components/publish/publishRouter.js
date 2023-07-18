import Main from '@/components/publish/main.vue';
import PubIndex from '@/components/publish/PubIndex.vue';

export default [
    {
        path: '/publish/index',
        name: 'PubIndex',
        component: PubIndex,
    },
    {
        path: '/publish/Main',
        name: 'Main',
        component: Main,
    },
];
