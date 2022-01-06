<template>
    <a-config-provider :locale="zhCN">
        <div class="app">
            <router-view />
        </div>
    </a-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
</script>

<style lang="less">
.app {
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
}
</style>
