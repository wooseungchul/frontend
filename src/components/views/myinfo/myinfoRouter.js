import HstryMngmn from '@/components/views/myinfo/HstryMngmn.vue'; // 이력관리
import SprtStts from '@/components/views/myinfo/SprtStts.vue'; // 지원현황
import ScrapAnncm from '@/components/views/myinfo/ScrapAnncm.vue'; // 스크랩 공고
import CstmrInqry from '@/components/views/myinfo/CstmrInqry.vue'; // 1:1문의
import TalkiWrote from '@/components/views/myinfo/TalkiWrote.vue'; // 내가 쓴 톡
import UserStngs from '@/components/views/myinfo/UserStngs.vue'; // 설정

export default [
    {
        path: '/myinfo/hstryMngmn',
        name: 'hstryMngmn',
        component: HstryMngmn,
    },
    {
        path: '/myinfo/sprtStts',
        name: 'sprtStts',
        component: SprtStts,
    },
    {
        path: '/myinfo/scrapAnncm',
        name: 'scrapAnncm',
        component: ScrapAnncm,
    },
    {
        path: '/myinfo/cstmrInqry',
        name: 'cstmrInqry',
        component: CstmrInqry,
    },
    {
        path: '/myinfo/talkiWrote',
        name: 'talkiWrote',
        component: TalkiWrote,
    },
    {
        path: '/myinfo/userStngs',
        name: 'userStngs',
        component: UserStngs,
    },
];
