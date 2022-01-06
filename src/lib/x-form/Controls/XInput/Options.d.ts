import { FormItemOptions } from '../FormItemOptions';
/** input组件属性 */
export interface InputFormItemOptions extends FormItemOptions {
    /** 最大长度 */
    maxlength?: number;
    /** 占位内容 */
    placeholder?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 前置标签 */
    addonBefore?: string;
    /** 后置标签 */
    addonAfter?: string;
    /** 可以点击清除图标删除内容 */
    allowClear?: boolean;
}
export declare const inputFormItemOptions: InputFormItemOptions;
