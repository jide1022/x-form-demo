import { FormItemOptions } from '../FormItemOptions';
/** divider组件属性 */
export interface DividerFormItemOptions extends FormItemOptions {
    /** 分割线标题的位置 */
    orientation: 'left' | 'center' | 'right';
    /** 颜色 */
    color: string;
    /** 字体大小 */
    fontSize: number;
    /** 是否虚线 */
    dashed: boolean;
    /** 文本 */
    text: string;
}
export declare const dividerFormItemOptions: DividerFormItemOptions;
