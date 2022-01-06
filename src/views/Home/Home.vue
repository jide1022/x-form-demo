<template>
    <XFormDesign @save="handleSave" :show-header="false" />
</template>

<script lang="ts" setup>
import { FormConfig } from '../../lib/x-form/Controls/FormOptions';

const handleSave = (data: FormConfig) => {
    console.log(JSON.stringify(data));
};
</script>

<style lang="less"></style>
