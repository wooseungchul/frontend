<template>
    <header>
        <div class="nav_wrap">
            <div class="wrapper">
                <div class="nav_container">
                    <h1>
                        <a href="#">
                            <img
                                src="~@/assets/images/common/logo.png"
                                alt="muscat people"
                            />
                        </a>
                    </h1>
                    <nav>
                        <ul>
                            <!-- 현재 페이지 표시 class : active -->
                            <li class="active"><a href="#">프로젝트</a></li>
                            <li><a href="#">머스캣피플</a></li>
                            <li><a href="#">커뮤니티</a></li>
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
                            <li>
                                <a href="#"><span>이력관리</span></a>
                            </li>
                            <li>
                                <a href="#"><span>지원현황</span></a>
                            </li>
                            <li>
                                <a href="#"><span>스크랩 공고</span></a>
                            </li>
                            <li>
                                <a href="#"><span>1:1문의</span></a>
                            </li>
                            <li>
                                <a href="#"><span>내가 쓴 톡</span></a>
                            </li>
                            <li>
                                <a href="#"><span>설정</span></a>
                            </li>
                            <li class="divider" />
                            <li>
                                <a href="#"><span>로그아웃</span></a>
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
        };
    },
};
</script>

