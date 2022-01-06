import { FormItemOptions } from '../FormItemOptions';
/** time组件属性 */
export interface TimeRangeFormItemOptions extends FormItemOptions {
    /** 占位内容1 */
    placeholder1?: string;
    /** 占位内容2 */
    placeholder2?: string;
    /** 是否显示清除按钮 */
    allowClear?: boolean;
    /** 默认值 */
    defaultValue?: string;
    /** 格式化 */
    format?: string;
}
export declare const timeRangeFormItemOptions: TimeRangeFormItemOptions;
