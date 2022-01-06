import { FormItemOptions } from '../FormItemOptions';
/** ArrayTableColumn组件属性 */
export interface ArrayTableColumnFormItemOptions extends FormItemOptions {
    /** 列名称 */
    title?: string;
    /** 列宽度 */
    width?: number;
    /** 列对齐方式 */
    align: 'left' | 'center' | 'right';
    /** 子组件 */
    children?: FormItemOptions[];
}
export declare const arrayTableColumnFormItemOptions: ArrayTableColumnFormItemOptions;
