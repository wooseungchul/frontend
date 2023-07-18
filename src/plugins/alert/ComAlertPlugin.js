import ComAlertComp from '@/plugins/alert/ComAlertComp.vue';
import store from '@/store/index';

export const alert = {
    close() {
        store.commit('ComAlertStore/setComAlertData', {
            isDisplay: false,
            type: '',
            title: '',
            message: '',
            done: () => {},
            cancel: () => {},
            doneBtnTitle: '',
            cancelBtnTitle: '',
        });
    },
    show({
        type = 'alert',
        title,
        message,
        done,
        cancel,
        doneBtnTitle = '확인',
        cancelBtnTitle = '취소',
    }) {
        store.commit('ComAlertStore/setComAlertData', {
            isDisplay: true,
            type,
            title,
            message,
            done,
            cancel,
            doneBtnTitle,
            cancelBtnTitle,
        });
    },
};

const ComAlertPlugin = {
    install(app) {
        app.config.globalProperties.$alert = alert;
        app.component('ComAlertComp', ComAlertComp);
    },
};
export { ComAlertPlugin };
