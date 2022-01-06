import { FormItemOptions } from '../FormItemOptions';
/** Button组件属性 */
export interface ButtonFormItemOptions extends FormItemOptions {
    /** 类型 */
    type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    /** 宽度自适应 */
    block: boolean;
    /** 背景透明 */
    ghost: boolean;
    /** 危险按钮 */
    danger: boolean;
    /** 按钮文本 */
    text: string;
    /** 对齐方式 */
    align: 'left' | 'center' | 'right';
}
export declare const buttonFormItemOptions: ButtonFormItemOptions;
