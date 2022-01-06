import { FormItemOptions } from '../FormItemOptions';
/** card组件属性 */
export interface CardFormItemOptions extends FormItemOptions {
    /** 标题 */
    title: string;
    /** 是否可折叠 */
    collapsible: boolean;
    /** 组件数据 */
    children: FormItemOptions[];
}
export declare const cardFormItemOptions: CardFormItemOptions;
