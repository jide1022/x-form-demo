import { FormItemOptions } from '../FormItemOptions';
/** ArrayCard组件属性 */
export interface ArrayCardOptions {
    /** 显示索引 */
    showIndex?: boolean;
    /** 标题 */
    title?: string;
}
/** ArrayCard表单对象属性 */
export declare type ArrayCardFormItemOptions = FormItemOptions & ArrayCardOptions;
export declare const arrayCardFormItemOptions: ArrayCardFormItemOptions;
