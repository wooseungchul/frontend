import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/index.js';
import router from '@/router.js';
import common from '@/api/fn_common.js';
import VueClipboard from 'vue-clipboard2';
import { ComAlertPlugin } from '@/plugins/alert/ComAlertPlugin.js';
import { ComLayerPlugin } from '@/plugins/layer/ComLayerPlugin.js';

const app = createApp(App);
app.use(router)
    .use(store)
    .use(common)
    .use(VueClipboard)
    .use(ComAlertPlugin)
    .use(ComLayerPlugin)
    .mount('#app');
window.app = app;
