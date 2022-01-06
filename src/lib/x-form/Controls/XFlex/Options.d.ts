import { FormItemOptions } from '../FormItemOptions';
/** flex组件属性 */
export interface FlexFormItemOptions extends FormItemOptions {
    /** 间距 */
    gap: number;
    /** 组件数据 */
    children: FormItemOptions[];
}
export declare const flexFormItemOptions: FlexFormItemOptions;
