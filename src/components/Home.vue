<template>
    <div id="container">
        <div id="content" class="main_content">
            <main>
                <section class="section_login">
                    <div class="wrapper">
                        <div class="info_wrap">
                            <p class="txt1">
                                최고의 사람들이 만들어가는 최고의 프로젝트
                            </p>
                            <p class="txt2">
                                <span class="purple">머스캣 피플</span>이
                                되어<br />
                                다양한 프로젝트를 경험하세요!
                            </p>
                            <a href="#" class="btn md border"
                                >프로젝트 지원하기</a
                            >
                        </div>

                        <!-- 로그인 상태 X -->
                        <div class="login_wrap">
                            <p class="txt">
                                로그인하여 마음에 드는 프로젝트를<br />
                                찜하고, 지원하세요!
                            </p>
                            <Login></Login>
                        </div>
                        <!-- //로그인 상태 X -->

                        <!-- 로그인 상태 -->
                        <!-- <div class="login_wrap">
                            <div class="top_area">
                                <p class="txt">
                                    <span class="purple fw-b">홍길동</span>님,
                                    안녕하세요!
                                </p>
                                <a href="#" class="btn_txt">이력서 관리</a>
                            </div>
                            <div class="mid_area">
                                <div class="portrait_wrap">
                                    <img
                                        src="~@/assets/images/main/img_portrait.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="ing_wrap">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span class="ing_num">1000</span>
                                            <span class="ing_txt">지원완료</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ing_num">10</span>
                                            <span class="ing_txt">스크랩 공고</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ing_num">10</span>
                                            <span class="ing_txt">내 프로젝트</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> -->
                        <!-- //로그인 상태 -->
                    </div>
                </section>
                <section class="section_category bg_gray">
                    <div class="wrapper">
                        <h2 class="title_sec">
                            당신에게 필요한
                            <span class="purple">머스캣피플</span>은?
                        </h2>
                        <ul class="list_category">
                            <li>
                                <a href="#">
                                    <p class="txt1">#리뷰와 수정의 반복</p>
                                    <p class="txt2">기획자</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="txt1">#1px도 소중한</p>
                                    <p class="txt2">디자이너</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="txt1">
                                        #디자이너와 개발자 그 사이
                                    </p>
                                    <p class="txt2">퍼블리셔</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="txt1">#일어나, 코딩해야지</p>
                                    <p class="txt2">개발자</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="section_project">
                    <div class="wrapper">
                        <h2 class="title_sec">최근 프로젝트 정보</h2>
                        <ProjectList></ProjectList>

                        <div class="btn_wrap">
                            <a href="#" class="btn lg border">
                                더 많은 프로젝트 정보가 궁금하신가요?
                                <i class="ico_arrow"></i>
                            </a>
                        </div>
                    </div>
                </section>

                <MainCommunity />

                <section class="section_new">
                    <div class="wrapper">
                        <h2 class="title_sec tal">New 머스캣피플</h2>
                        <div class="card_list_wrap">
                            <swiper
                                class="card_list"
                                :options="swiperOption"
                                :modules="modules"
                                :slides-per-view="4"
                                :space-between="29"
                                :autoplay="{ delay: 5000 }"
                                :pagination="{ clickable: true }"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                            >
                                <swiper-slide
                                    class="card"
                                    v-for="item in items"
                                    v-bind:key="item.id"
                                >
                                    <div class="profile_wrap">
                                        <div class="portrait_wrap">
                                            <img
                                                src="~@/assets/images/main/img_portrait.png"
                                                alt=""
                                            />
                                        </div>
                                        <div class="info_wrap">
                                            <p class="category">
                                                {{ item.category }}
                                            </p>
                                            <p class="name">{{ item.name }}</p>
                                            <dl class="detail">
                                                <dt>경력</dt>
                                                <dd>{{ item.period }}</dd>
                                                <dt>보유기술</dt>
                                                <dd>{{ item.tech }}</dd>
                                                <dt>최근 프로젝트</dt>
                                                <dd>
                                                    {{ item.projectRecent }}
                                                </dd>
                                                <dt>MBTI</dt>
                                                <dd>{{ item.mbti }}</dd>
                                            </dl>
                                        </div>
                                        <div class="dim_wrap">
                                            <span class="quote">“</span>
                                            <p class="comment">
                                                {{ item.comment }}
                                            </p>
                                            <a href="#" class="btn md border"
                                                >자세히 보기</a
                                            >
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
import Login from '@/components/publish/Login.vue';
import ProjectList from '@/components/publish/ProjectList.vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';

import MainCommunity from '@/components/views/community/component/MainCommunity.vue';

export default {
    components: {
        Login,
        ProjectList,
        Swiper,
        SwiperSlide,
        MainCommunity,
    },
    setup() {
        const onSwiper = swiper => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Autoplay, Pagination],
        };
    },
    data() {
        return {
            items: [
                {
                    id: '1',
                    category: '디자이너',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
                {
                    id: '2',
                    category: '개발자',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
                {
                    id: '3',
                    category: '기획자',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
                {
                    id: '4',
                    category: '기획자',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
                {
                    id: '5',
                    category: '디자이너',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
                {
                    id: '6',
                    category: '디자이너',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
                {
                    id: '7',
                    category: '디자이너',
                    name: '홍길동',
                    period: '10년 10개월',
                    tech: '포토샵, 피그마, 스케치,',
                    projectRecent: 'KB국민은행 전자영수증전자영수증',
                    mbti: 'ISTP',
                    comment: '최적의 솔루션을 설계/구축합니다',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import '~@/assets/scss/main.scss';
</style>
