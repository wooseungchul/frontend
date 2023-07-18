<template>
    <div>
        <button @click="onClickStoreTest()">스토어 테스트</button><br />
        {{ getSampleData }}<br />
        <button @click="onClickApiTest()">Api 거래 테스트</button><br />
        {{ getComponentSampleData }}<br />
        <div
            v-for="(data, idx) in sampleList"
            :key="idx"
            @click="onClickData(data)"
        >
            {{ data }}
        </div>
        <br />
        <ThePageComp
            ref="thePageComp"
            :pageInfo="pageInfo"
            @setPageCompCallback="setPageCompCallback"
        />
        <br />
        <button @click="onClickAlertTestButton()">커스텀 알럿 테스트</button>
        <button @click="onClickConfirmTestButton()">
            커스텀 confirm 테스트
        </button>

        <button @click="onClickComponentBind()">컴포넌트 바인딩</button><br />
        <button @click="onClickComponentAlertButton()">
            컴포넌트 알럿 호출</button
        ><br />
        <br />
        <div>
            <input type="file" ref="serveyImage" @change="handleFileChange" />
        </div>
        <p>upload 이미지 :</p>
        <div v-for="(file, idx) in files" :key="idx">
            <div>
                <p>{{ file.name }}</p>
                <button @click="onDelFile(file)">삭제</button>
            </div>
        </div>
        <button @click="imgSubmit()">서버로 전송하기</button>
        <button @click="fileDownload()">파일다운로드</button>
        <ComAlertComp ref="ComAlertComp" :arg="alertArg" />

        <br /><br /><br /><br />
        <button @click="getFileList()">파일 리스트 조회</button>
        <div v-for="(file, idx) in cmnFileList" :key="idx">
            <h3>{{ file.realFileNm }}</h3>
            <a href="javascript:void(0);" @click="fileDownload(file.filePhysNm)"
                >파일다운로드</a
            >
        </div>
        <br /><br />
        <button @click="copyText()">111111111</button>

        <h1>1111111</h1>

        <!-- <button @click="getCmcdList()">페이징 처리 데이터가져오기</button> -->

        <div v-for="(data, idx) in cmcdInfo.cmcdList" :key="idx">
            {{ data }}
        </div>
        <ThePagination
            ref="thePagination"
            @setPageCallback="setPageCallback"
        ></ThePagination>
    </div>
</template>

<script>
import { lfCommon } from '@/api/fn_common.js';
import http from '@/api/http';
import api from '@/api/sample';
import ComAlertComp from '@/components/views/common/ComAlertComp.vue';
import ThePageComp from '@/components/views/common/ThePageComp.vue';
import ThePagination from '@/components/views/common/ThePagination.vue';

export default {
    name: 'SamplePage',
    components: {
        ThePageComp,
        ComAlertComp,
        ThePagination,
    },
    data() {
        return {
            sampleData: null,
            sampleList: [],
            currentPage: 0,
            pageInfo: {
                page: 1,
                pageCount: 10,
                pageList: [],
            },
            comAlertCompArg: {},
            files: [],
            alertArg: {},
            cmnFileList: [],

            cmcdInfo: {
                page: 1,
                rowPerPage: 10,
                cmcdList: [],
                pagination: {
                    currentPage: 1,
                    startPage: 1,
                    limitStart: 1,
                    totalPageCount: 1,
                    existNextPage: false,
                    endPage: 1,
                    existPrevPage: false,
                },
            },
        };
    },
    mounted() {
        this.getSampleListData();
        console.log(lfCommon.getDate('YYYYMMDD'));
        console.log(lfCommon.getDateFormat('20201111', 'YYYYMMDD'));
        console.log(lfCommon.addDay('20220101', '1', 'YYYYMMDD'));
        console.log(lfCommon.addMonth('20220101', '1', 'YYYYMMDD'));
        console.log(lfCommon.diffDay('20220101', '20220103'));
        console.log(lfCommon.diffMonth('20220101', '20220403'));
        console.log(lfCommon.chkEmpty('123123'));
        console.log(lfCommon.getByteLength('1'));
        this.getCmcdList();
    },
    computed: {
        getSampleData() {
            return this.$store.getters['sampleStore/getSampleData'];
        },
        getComponentSampleData() {
            return this.sampleData ?? '';
        },
        getCmcdListData() {
            let list = [];
            for (
                let i = this.cmcdInfo.calcMap.startPage;
                i <= this.cmcdInfo.calcMap.endPage;
                i++
            ) {
                list.push(i);
            }
            return list;
        },
    },
    methods: {
        onClickStoreTest() {
            this.$store.dispatch('sampleStore/fatchSampleData', 'TestString');
        },

        async onClickApiTest() {
            const { data } = await api.fetchSampleData('Test123');
            this.sampleData = data;
        },

        async getSampleListData() {
            await api.fetchSampleListData().then(response => {
                this.pageInfo.page = 1;
                this.pageInfo.pageCount = 10;
                this.pageInfo.pageList = response?.data?.sampleList || [];
                this.$refs.thePageComp.pagination(this.pageInfo);
            });
        },

        onClickData(data) {
            alert(data);
        },

        onClickAlertTestButton() {
            this.$alert.show({
                type: 'alert',
                title: 'alertTest',
                message: '알럿테스트입니다.',
            });
        },

        onClickConfirmTestButton() {
            this.$alert.show({
                type: 'confirm',
                message: 'confirm테스트입니다.',
                done: () => {
                    this.onDoneCallback();
                },
                cancel: () => {
                    this.onCancelCallback();
                },
            });
        },

        onClickComponentBind() {
            this.$layer.open('/sample/SecondPage.vue', {
                done: () => {
                    this.onDoneCallback();
                    alert('done');
                },
                cancel: () => {
                    this.onCancelCallback();
                },
            });
        },

        setPageCompCallback(data) {
            this.currentPage = data.currentPage;
            this.sampleList = data.pageList;
        },

        handleFileChange() {
            console.log(this.$refs.serveyImage.files);
            const file = this.$refs.serveyImage.files[0];
            if (file) {
                this.files.push(
                    Object.assign(this.$refs.serveyImage.files[0], {
                        key: Date.now(),
                    })
                );
            }
        },

        imgSubmit() {
            if (this.files.length <= 0) {
                this.$alert.show({
                    type: 'alert',
                    message: '업로드 할 파일이 없습니다.',
                });
                return;
            }
            lfCommon
                .fileUpload('sample', this.files)
                .then(response => {
                    const { fileUploadResult } = response.data;
                    if (fileUploadResult === '1') {
                        this.$alert.show({
                            type: 'alert',
                            message: '파일 업로드가 완료하였습니다.',
                        });
                    } else {
                        this.$alert.show({
                            type: 'alert',
                            message: '파일 업로드가 실패하였습니다.',
                        });
                    }
                })
                .catch(error => {
                    this.$alert.show({ type: 'alert', message: error.message });
                })
                .finally(() => {
                    this.files = [];
                    this.$refs.serveyImage.value = '';
                });
        },

        onDelFile(file) {
            this.files = this.files.filter(el => {
                return el.key !== file.key;
            });
        },

        onClickComponentAlertButton() {
            this.alertArg = {
                type: 'confirm',
                message: '메롱메롱',
                doneBtnTitle: '111111',
                cancelBtnTitle: '222222',
                done: () => {
                    this.onDoneCallback();
                },
                cancel: () => {
                    this.onCancelCallback();
                },
            };
            this.$refs.ComAlertComp.onShow();
        },

        onDoneCallback() {
            console.log('onDoneCallback');
        },

        onCancelCallback() {
            console.log('onCancelCallback');
        },

        fileDownload(filePhyNm) {
            http.get(
                'file/fileDownload',
                {
                    filePhysNm: filePhyNm,
                },
                { responseType: 'blob' }
            )
                .then(response => {
                    const name = response.headers['content-disposition']
                        .split('filename=')[1]
                        .replace(/"/g, '');
                    const url = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', decodeURIComponent(name));
                    link.style.cssText = 'display:none';
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                })
                .catch(() => {
                    this.$alert.show({
                        type: 'alert',
                        message:
                            '파일을 다운로드 받는 도중 오류가 발생하였습니다.',
                    });
                });
        },

        getFileList() {
            http.post('sample/getFileList').then(response => {
                this.cmnFileList = response?.data?.fileList ?? [];
            });
        },

        copyText() {
            this.$copyText('111111111').then(() => {
                alert('11111111');
            });
        },

        getCmcdList() {
            const param = {
                page: this.cmcdInfo.page,
                rowPerPage: this.cmcdInfo.rowPerPage,
            };
            http.post('sample/getCmcdList', param).then(response => {
                const { data } = response;
                this.cmcdInfo.cmcdList = data?.cmcdList ?? [];
                this.cmcdInfo.pagination = data.pagination;
                this.cmcdInfo.pagination.currentPage = this.cmcdInfo.page;
                this.$refs.thePagination.setPagination(
                    this.cmcdInfo.pagination
                );
            });
        },
        setPageCallback(page) {
            this.cmcdInfo.page = page;
            this.getCmcdList();
        },
    },
};
</script>

<style lang="scss"></style>
