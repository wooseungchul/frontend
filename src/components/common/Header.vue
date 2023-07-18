<template>
    <header>
        <div class="nav_wrap">
            <div class="wrapper">
                <div class="nav_container">
                    <h1>
                        <a
                            href="javascript:void(0);"
                            @click="onMovePage(homeMenu)"
                        >
                            <img
                                src="~@/assets/images/common/logo.png"
                                alt="muscat people"
                            />
                        </a>
                    </h1>
                    <nav>
                        <ul>
                            <li v-for="(menu, index) in naviMenu" :key="index">
                                <a
                                    href="javascript:void(0);"
                                    @click="onMovePage(menu)"
                                    >{{ menu.title }}</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- 로그인 상태 X -->
                <!-- <div class="nav_widget">
                <button class="btn st1">로그인</button>
            </div> -->
                <!-- //로그인 상태 X -->

                <!-- 로그인 상태 -->
                <div class="nav_widget">
                    <button
                        class="btn my"
                        v-bind:class="{ active: showModalMy }"
                        @click.prevent="showModalMy = !showModalMy"
                    >
                        <span>내 정보</span>
                        <div class="icon_my">
                            <img
                                src="~@/assets/images/common/btn/btn_my_portrait.png"
                                alt=""
                            />
                        </div>
                    </button>
                    <div class="nav_popup_wrap" v-if="showModalMy">
                        <ul>
                            <li
                                v-for="(menu, index) in myInfoMenu"
                                :key="index"
                            >
                                <a
                                    href="javascript:void(0);"
                                    @click="
                                        this.showModalMy = false;
                                        onMovePage(menu);
                                    "
                                    ><span>{{ menu.title }}</span></a
                                >
                            </li>
                            <li class="divider" />
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    @click="
                                        this.this.showModalMy = false;
                                        onLoginOut();
                                    "
                                    ><span>로그아웃</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- //로그인 상태 -->
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            showModalMy: false,
            homeMenu: { name: 'home', path: '/', title: 'muscat people' },
            naviMenu: [                
                { 
                    name: 'projectMain', 
                    path: '/project/projectMain', 
                    title: '프로젝트' 
                },
                { name: '', path: '', title: '머스캣피플' },
                {
                    name: 'freeLancerTalk',
                    path: '/community/freecLancerTalk',
                    title: '커뮤니티',
                },
                {
                    name: 'PubIndex',
                    path: '/publish/index',
                    title: '퍼블리싱:임시',
                },
            ],
            myInfoMenu: [
                { name: 'hstryMngmn', path: '', title: '이력관리' },
                { name: 'sprtStts', path: '', title: '지원현황' },
                { name: 'scrapAnncm', path: '', title: '스크랩 공고' },
                { name: 'cstmrInqry', path: '', title: '1:1문의' },
                { name: 'talkiWrote', path: '', title: '내가 쓴 톡' },
                { name: 'userStngs', path: '', title: '설정' },
            ],
        };
    },
    methods: {
        onMovePage(menu) {
            if (menu.name) {
                this.$router.push({ name: menu.name });
            } else if (menu.path) {
                this.$router.push({ path: menu.path });
            } else {
                alert('화면 이동 처리 예정');
            }
        },
        onLoginOut() {
            alert('로그아웃 처리 예정');
        },
    },
};
</script>
