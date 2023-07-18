import http from '@/api/http';

export default {
    async fetchSampleData(param) {
        return await http.post('sampleApi', param);
    },

    async fetchSampleListData() {
        return await http.post('sampleListData');
    },
};
