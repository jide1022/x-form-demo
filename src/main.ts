import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import './lib/x-form/index.css';
import XForm from './lib/x-form/index';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(XForm);
app.use(Antd);

app.mount('#app');
