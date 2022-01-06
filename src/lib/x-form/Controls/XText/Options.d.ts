import { FormItemOptions } from '../FormItemOptions';
/** text组件属性 */
export interface TextFormItemOptions extends FormItemOptions {
    /** 对齐方式 */
    align: 'left' | 'center' | 'right';
    /** 颜色 */
    color: string;
    /** 字体大小 */
    fontSize: number;
    /** 上下边距 */
    paddingTopBottom: number;
    /** 左右边距 */
    paddingLeftRight: number;
    /** 文本 */
    text: string;
}
export declare const textFormItemOptions: TextFormItemOptions;
