import { FormItemOptions, UiState } from './FormItemOptions';
import { EventResponder } from './XEventResponder/types';
/** 自定义表单属性定义 */
export interface FormOptions {
    /** 布局方式 */
    layout: 'horizontal' | 'vertical';
    /** 是否显示冒号 */
    colon?: boolean;
    /** 标签的文本对齐方式 */
    labelAlign: 'left' | 'right';
    /** 标签宽度 */
    labelWidth: number;
    /** 表单唯一标识 */
    name: string;
    /** UI形态 */
    uiState: UiState;
    /** 时间响应器 */
    eventResponder?: EventResponder;
}
/** 自定义表单类型定义 */
export interface FormConfig {
    config: FormOptions;
    controls: FormItemOptions[];
}
