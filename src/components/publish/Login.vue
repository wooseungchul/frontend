<template>
    <div class="login_form_wrap">
        <form action="#">
            <ul class="login_list">
                <li>
                    <label for="email">이메일</label>
                    <div class="formCont">
                        <input
                            type="text"
                            id="email"
                            name="#"
                            title="이메일"
                            class="input_text"
                        />
                    </div>
                </li>
                <li>
                    <label for="email">비밀번호</label>
                    <div class="formCont">
                        <input
                            type="password"
                            id="pw"
                            name="#"
                            title="비밀번호"
                            class="input_text"
                        />
                    </div>
                </li>
            </ul>
            <button type="submit" class="btn lg st1">로그인</button>
        </form>
        <div class="find_wrap">
            <ul>
                <li><a href="#">아이디 찾기</a></li>
                <li><a href="#">비밀번호 재설정</a></li>
                <li><a href="#">회원가입</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>
