<template>
    <ul class="project_list">
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck1 = !favorCheck1"
                            class="btn_favor"
                            :class="{ checked: favorCheck1 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>금융</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck2 = !favorCheck2"
                            class="btn_favor"
                            :class="{ checked: favorCheck2 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck3 = !favorCheck3"
                            class="btn_favor"
                            :class="{ checked: favorCheck3 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck4 = !favorCheck4"
                            class="btn_favor"
                            :class="{ checked: favorCheck4 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck5 = !favorCheck5"
                            class="btn_favor"
                            :class="{ checked: favorCheck5 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck6 = !favorCheck6"
                            class="btn_favor"
                            :class="{ checked: favorCheck6 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck7 = !favorCheck7"
                            class="btn_favor"
                            :class="{ checked: favorCheck7 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
        <li>
            <div class="box_wrap">
                <div class="area_top">
                    <div class="block1">
                        <div class="tag_wrap">
                            <span class="tag st1">기획</span>
                            <span class="tag st1">개발</span>
                            <span class="tag st1">디자인</span>
                            <span class="tag st2">초급</span>
                            <span class="tag st2">중급</span>
                            <span class="tag st2">특급</span>
                            <span class="tag st3">모집중</span>
                            <span class="tag st4">모집완료</span>
                        </div>
                        <button
                            @click="favorCheck8 = !favorCheck8"
                            class="btn_favor"
                            :class="{ checked: favorCheck8 }"
                        >
                            채용정보 스크랩
                        </button>
                    </div>
                    <div class="block2">
                        <div class="txt_wrap">
                            <p class="title">
                                <a href="#">
                                    **은행 전산시스템 개편 프로젝트
                                </a>
                            </p>
                            <p class="date">2023.01.02 ~ 2023.05.31 (5개월)</p>
                        </div>
                        <div class="icon_company">
                            <span>브랜드</span>
                            <!-- <img src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <div class="area_bottom">
                    <dl class="info">
                        <dt>근무지 :</dt>
                        <dd>서울 영등포구</dd>
                        <dt>단가 :</dt>
                        <dd>500~600만원</dd>
                        <dt>PM :</dt>
                        <dd>박지현 이사</dd>
                    </dl>
                </div>
            </div>
            <ul class="hashtag_list">
                <li>#맛집 매니아들 모여라</li>
                <li>#맛집 매니아들 모여라</li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            favorCheck1: false,
            favorCheck2: false,
            favorCheck3: false,
            favorCheck4: false,
            favorCheck5: false,
            favorCheck6: false,
            favorCheck7: false,
            favorCheck8: false,
        };
    },
};
</script>
