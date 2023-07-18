import ComLayerComp from '@/plugins/layer/ComLayerComp.vue';
import store from '@/store/index';

const layer = {
    close() {
        store.commit('ComLayerStore/setComLayerData', {
            componentPath: null,
            done: () => {},
            cancel: () => {},
        });
    },
    open(componentPath, arg) {
        store.commit('ComLayerStore/setComLayerData', {
            componentPath,
            arg,
        });
    },
};

const ComLayerPlugin = {
    install(app) {
        app.config.globalProperties.$layer = layer;
        app.component('ComLayerComp', ComLayerComp);
    },
};
export { ComLayerPlugin };
