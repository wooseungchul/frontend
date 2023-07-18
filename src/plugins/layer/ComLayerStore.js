const ComLayerStore = {
    namespaced: true,
    state: {
        comLayerData: {
            componentPath: null,
            arg: {},
        },
    },
    mutations: {
        setComLayerData(state, data) {
            state.comLayerData = data;
        },
    },
    getters: {
        getComLayerData(state) {
            return state.comLayerData;
        },
    },
};

export default ComLayerStore;
