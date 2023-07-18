import api from '@/api/sample';

const sampleStore = {
    namespaced: true,
    state: {
        sampleData: null,
    },
    mutations: {
        setSampleData(state, data) {
            console.log('sampleStore.setSampleData Action Test...');
            state.sampleData = data;
        },
    },
    getters: {
        getSampleData(state) {
            return state.sampleData;
        },
    },
    actions: {
        async fatchSampleData({ commit }, param) {
            console.log('sampleStore.fatchSampleData Action Test...');
            try {
                const { data } = await api.fetchSampleData(param);
                commit('setSampleData', data);
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default sampleStore;
