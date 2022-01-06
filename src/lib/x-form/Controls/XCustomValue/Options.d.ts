import { FormItemOptions } from '../FormItemOptions';
/** CustomValue组件属性 */
export interface CustomValueFormItemOptions extends FormItemOptions {
    /** 回显值字段 */
    labelField: string;
    /** 值类型 */
    valueType: string;
    /** 占位符 */
    placeholder?: string;
    /** 选择按钮文本 */
    selectBtnText: string;
    /** 清空按钮文本 */
    clearBtnText: string;
    /** 可以清空 */
    allowClear: boolean;
}
export declare const customValueFormItemOptions: CustomValueFormItemOptions;
