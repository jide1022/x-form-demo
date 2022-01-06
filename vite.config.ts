import { defineConfig, loadEnv } from 'vite';
const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const vite_env = loadEnv(mode, process.cwd());
    console.log(vite_env);
    return {
        base: vite_env.VITE_APP_BaseUrl,
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        plugins: [vue()],
        server: {
            host: '0.0.0.0',
            proxy: {},
        },
    };
});
