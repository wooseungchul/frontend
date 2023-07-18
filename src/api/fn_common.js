import dayjs from 'dayjs';
import http from '@/api/http.js';

export default {
    install(Vue) {
        /**
         * 포맷팅
         * type -> date:날짜, number:천단위콤마, coNo: 사업자번호, phone:전화번호
         */
        (Vue.config.globalProperties.$format = function (value, type) {
            if (value === null) {
                return '';
            }

            let val = value;
            if (type === 'date') {
                // 날짜 -> YYYY.MM.DD
                if (val.length === 8) {
                    return val.replace(/^(\d{4})(\d{2})(\d{2})$/, `$1.$2.$3`);
                }
                return val;
            } else if (type === 'number') {
                return val
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
            } else if (type === 'coNo') {
                if (val.length === 10) {
                    return val.replace(/^(\d{3})(\d{2})(\d{5})$/, `$1-$2-$3`);
                }
                return val;
            } else if(type === 'phone'){
                if (val.length === 11) {
                    return val.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
                }else if(val.length === 10){
                    if('02' === val.substr(0,2)){
                        return val.replace(/^(\d{2})(\d{4})(\d{4})$/, `$1-$2-$3`);
                    }else{
                        return val.replace(/^(\d{3})(\d{3})(\d{4})$/, `$1-$2-$3`);
                    }
                }
                return val; // ?? 필요한가? 45번줄에 있는디....
            }

            return value;
        }),
            /**
             * 입력 정규식
             */
            (Vue.config.globalProperties.$autoInput = function (event, type) {
                console.log('$autoInput 진입');

                if (type === 'phone') {
                    // 전화번호 02-xxxx-xxxx, 010-xxxx-xxxx

                    let phoneLength = event.target.value.replace(
                        /[^0-9]/g,
                        ''
                    ).length;
                    if (phoneLength === 10) {
                        event.target.value = event.target.value
                            .replace(/[^0-9]/g, '')
                            .replace(/^(\d{2})(\d{4})(\d{4})$/, `$1-$2-$3`);
                    } else if (phoneLength === 11) {
                        event.target.value = event.target.value
                            .replace(/[^0-9]/g, '')
                            .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
                    }
                } else if (type === 'coNo') {
                    // 사업자번호 10자리 xxx-xx-xxxxx

                    event.target.value = event.target.value
                        .replace(/[^0-9]/g, '')
                        .replace(/^(\d{3})(\d{2})(\d{5})$/, `$1-$2-$3`);
                } else {
                    let typeArr = type.split('|');
                    let reg = '';
                    if (typeArr.length > 0) {
                        for (let i = 0; i < typeArr.length; i++) {
                            let tmp = typeArr[i];

                            if (tmp === 'num') {
                                // 숫자만 체크 : /^[0-9]/g,
                                reg += '0-9|';
                            } else if (tmp === 'kor') {
                                // 한글만 체크 : /^[가-힣]/g
                                reg += 'ㄱ-ㅎ|ㅏ-ㅣ|가-힣|';
                            } else if (tmp === 'eng') {
                                // 영문만 체크 : /^[a-zA-Z]/g
                                reg += 'a-z|A-Z|';
                            }
                        }
                        reg = reg.substring(0, reg.length - 1);

                        const regex = new RegExp(`[^${reg}]`, 'g');
                        console.log(regex);
                        event.target.value = event.target.value.replace(
                            regex,
                            ''
                        );
                    }
                }
            }),
            /**
             * 날짜 구하기
             * @returns {string}
             */
            (Vue.config.globalProperties.$getDate = function () {
                let today = new Date();
                let yyyy = today.getFullYear();
                let mm = today.getMonth() + 1;
                let dd = today.getDate();

                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                return yyyy + '.' + mm + '.' + dd;
            }),
            /**
             * Date 객체 구하기
             */
            (Vue.config.globalProperties.$getNewDate = function (type1, type2) {
                const now = new Date();
                if (type1 === 'D') {
                    return new Date(now.setDate(now.getDate() + type2));
                } else if (type1 === 'M') {
                    return new Date(now.setMonth(now.getMonth() + type2));
                } else if (type1 === 'Y') {
                    return new Date(now.setFullYear(now.getFullYear() + type2));
                }

                return new Date();
            });

        /**
         *
         * @returns {string}
         */
        Vue.config.globalProperties.$getCodeList = function (value) {
            const dataList = this.$store.getters.getCmnCodeList;
            let retDataList = [];
            if (dataList !== null) {
                dataList.forEach(function (el) {
                    if (el.grpCdId === value) {
                        retDataList.push(el);
                    }
                });
            }

            return retDataList;
        };
    },
};

export const lfCommon = {
    /**
     * 요청 포맷으로 현재일자 반환
     * lfGetDate('YYYY-MM-DD')
     * @param format
     * @returns
     */
    getDate: (format = 'YYYY-MM-DD') => {
        return dayjs().format(format);
    },

    /**
     * 요청 Date와 요청 포맷으로 일자 반환
     * lfGetDateFormat({ date: new Date(), format: DateFormat.YYYYMMDD })
     * @param date
     * @param format
     * @returns {string}
     */
    getDateFormat: (date, format = 'YYYY-MM-DD') => {
        return dayjs(date).format(format);
    },

    /**
     * lfAddDay('20200101', 7)
     * @param {Date | string} date
     * @param {number} day
     * @param {DateType} format
     * @returns {string}
     */
    addDay: (date, day, format = 'YYYY-MM-DD') => {
        return dayjs(date).add(day, 'day').format(format);
    },

    /**
     * lfAddMonth('20200101', 7)
     * @param {Date | string} date
     * @param {number} month
     * @param {DateType} format
     * @returns {string}
     */
    addMonth: (date, month, format = 'YYYY-MM-DD') => {
        return dayjs(date).add(month, 'month').format(format);
    },

    /**
     * 일단위 날짜 비교
     * lfDiffDay('20200101', '20200131')
     * @param {Date | string} date1
     * @param {Date | string} date2
     * @returns {number}
     */
    diffDay: (date1, date2) => {
        return dayjs(date1).diff(date2, 'day');
    },

    /**
     * 월단위 날짜 비교
     * lfDiffMonth('20200101', '20200131')
     * @param {Date | string} date1
     * @param {Date | string} date2
     * @returns {number}
     */
    diffMonth: (date1, date2) => {
        return dayjs(date1).diff(date2, 'month');
    },

    /**
     * value 값이 빈값인지 체크
     * @param {string | obejct | undefined | null} value
     * @returns {boolean}
     */
    chkEmpty: value => {
        return (
            value === '' ||
            value === null ||
            value === undefined ||
            (value !== null &&
                typeof value === 'object' &&
                !Object.keys(value).length)
        );
    },

    /**
     * 입력값의 바이트 길이를 리턴
     * @param {string} input
     * @return number
     */
    getByteLength: text => {
        return text
            .split('')
            .map(s => s.charCodeAt(0))
            .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
    },

    /**
     * window popup open
     * @param {string} url : 라우터 Path
     * @param {string} title : 팝업이름
     * @param {popup option} options
     * @return Window
     */
    windowPopOpen: (url, title, options) => {
        const curX = window.screenLeft;
        const curY = window.screenTop;
        const curWidth = document.body.clientWidth;
        const curHeight = document.body.clientHeight;
        const nLeft = curX + curWidth / 2 - options.width / 2;
        const nTop = curY + curHeight / 2 - options.height / 2;

        const windowPopup = window.open(
            url,
            title,
            `left=${nLeft}, top=${nTop}, width=${options.width}, height=${options.height}, toolbar=${toolbar}, menubar=${menubar}, statusbar=${statusbar}, scrollbars=${options.scrollbar}, resizable=${options.resizable}`
        );

        if (windowPopup) {
            windowPopup.focus();
        }

        return windowPopup;
    },

    /**
     * lfCommon.fileUpload
     * @param {string} type : 업무영문명 {login, project, muscatpeople, community, myinfo}
     * @param {object} files : 업로드할 파일 배열
     * @return {string} fileUploadResult: 파일 업로드 여부
     */
    fileUpload: (type, files) => {
        //TODO: rest url 수정
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            const fileFilter = /\.(jpg|png|jpeg|pdf)$/i;
            let isFileFilterError = false;

            files.forEach(file => {
                if (!file.name.match(fileFilter)) {
                    isFileFilterError = true;
                }
                formData.append('files', file);
            });

            formData.append('type', type);

            if (isFileFilterError) {
                reject({
                    message:
                        '업로드할 수 없는 파일 형식이 포함되어 있습니다. jpg|png|jpeg|pdf',
                });
            } else {
                http.post('file/fileUpload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                    .then(response => {
                        console.log(
                            `fn_common fileUpload success`,
                            JSON.stringify(response)
                        );
                        resolve(response);
                    })
                    .catch(error => {
                        console.log(`fileUpload fail`, JSON.stringify(error));
                        reject(error);
                    });
            }
        });
    },

    fileDownload: filePhysNm => {
        http.get(
            'file/fileDownload',
            {
                filePhysNm: filePhysNm,
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
                    message: '파일을 다운로드 받는 도중 오류가 발생하였습니다.',
                });
            });
    },
};
