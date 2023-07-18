const ComAlertStore = {
    namespaced: true,
    state: {
        comAlertData: {
            isDisplay: false,
            type: '',
            title: '',
            message: '',
            done: () => {},
            cancel: () => {},
            doneBtnTitle: '',
            cancelBtnTitle: '',
        },
    },
    mutations: {
        setComAlertData(state, data) {
            state.comAlertData = data;
        },
    },
    getters: {
        getComAlertData(state) {
            return state.comAlertData;
        },
    },
};

export default ComAlertStore;
