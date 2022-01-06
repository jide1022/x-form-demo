import { Component } from 'vue';
import { ControlKey, FormItemOptions } from './FormItemOptions';
import { FormConfig } from './FormOptions';
/** 所有组件对象映射 */
export declare type AllControls = {
    [key in ControlKey]?: {
        com?: Component;
        options?: FormItemOptions;
        formConfig?: FormConfig;
    };
};
export declare const allControls: AllControls;
