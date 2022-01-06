import { FormItemOptions } from '../FormItemOptions';
/** time组件属性 */
export interface TimeFormItemOptions extends FormItemOptions {
    /** 占位内容 */
    placeholder?: string;
    /** 是否显示清除按钮 */
    allowClear?: boolean;
    /** 默认值 */
    defaultValue?: string;
    /** 格式化 */
    format?: string;
}
export declare const timeFormItemOptions: TimeFormItemOptions;
