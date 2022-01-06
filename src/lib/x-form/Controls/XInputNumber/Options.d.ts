import { FormItemOptions } from '../FormItemOptions';
/** inputNumber组件属性 */
export interface InputNumberFormItemOptions extends FormItemOptions {
    /** 默认值 */
    defaultValue?: number;
    /** 最小值 */
    min?: number;
    /** 最大值 */
    max?: number;
    /** 精度 */
    precision?: number;
    /** 前置标签 */
    addonBefore?: string;
    /** 后置标签 */
    addonAfter?: string;
}
export declare const inputNumberFormItemOptions: InputNumberFormItemOptions;
